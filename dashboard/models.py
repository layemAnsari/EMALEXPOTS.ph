from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
import uuid

class UserProfile(models.Model):
    """
    Extends the default Django User model to save customer delivery details
    and handle the store loyalty points system.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=20, help_text="Format: 09XXXXXXXXX")
    default_shipping_address = models.TextField(blank=True, null=True)
    
    # Points System
    loyalty_points = models.IntegerField(default=0, validators=[MinValueValidator(0)], help_text="Available reward points balance")
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - Balance: {self.loyalty_points} pts"


class PointHistory(models.Model):
    """
    Tracks all point additions and subtractions for audits and transparency.
    """
    TRANSACTION_TYPES = [
        ('EARNED', 'Points Earned from Purchase'),
        ('REDEEMED', 'Points Redeemed on Checkout'),
        ('REFUNDED', 'Points Returned from Cancellation'),
        ('ADJUSTED', 'Manual Admin Adjustment'),
    ]
    
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='point_history')
    amount = models.IntegerField(help_text="Positive for addition, negative for deduction")
    transaction_type = models.CharField(max_length=15, choices=TRANSACTION_TYPES)
    description = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.user.username} | {self.transaction_type} | {self.amount:+d}"


class Product(models.Model):
    """
    Stores catalog items.
    """
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    
    # Points Config multiplier (e.g., earn 1 point per 100 PHP spent)
    points_reward_eligible = models.BooleanField(default=True, help_text="Can users earn points buying this?")
    
    shopee_item_id = models.BigIntegerField(blank=True, null=True, unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    """
    A persistent shopping cart tied directly to the user's account.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cart')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart belonging to {self.user.username}"

    @property
    def total_cart_price(self):
        return sum(item.subtotal for item in self.cart_items.all())


class CartItem(models.Model):
    """
    Individual items inside a user's database cart.
    """
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)])
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('cart', 'product') # Prevents duplicate product rows in the same cart

    def __str__(self):
        return f"{self.quantity}x {self.product.name} in {self.cart.user.username}'s cart"

    @property
    def subtotal(self):
        return self.quantity * self.product.price


class Order(models.Model):
    """
    Tracks master transactional status and applied point balances.
    """
    PAYMENT_METHOD_CHOICES = [
        ('ONLINE', 'Online Payment (GCash/Maya/Card)'),
        ('COD', 'Cash on Delivery (COD)'),
    ]
    
    ORDER_STATUS_CHOICES = [
        ('PENDING', 'Pending Payment / Verification'),
        ('PAID', 'Paid / Ready for Packaging'),
        ('SHIPPED', 'Handed over to Courier'),
        ('DELIVERED', 'Delivered & Completed'),
        ('CANCELLED', 'Cancelled'),
        ('RTS', 'Return to Sender'),
    ]

    COURIER_CHOICES = [
        ('JT', 'J&T Express'),
        ('FLASH', 'Flash Express'),
        ('LBC', 'LBC Express'),
        ('LALAMOVE', 'Lalamove'),
    ]

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='orders')
    order_tracking_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    
    # Delivery Info
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    shipping_address = models.TextField()
    
    # Financial Breakdown
    subtotal_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    points_discount_applied = models.DecimalField(max_digits=10, decimal_places=2, default=0.00, help_text="Cash value deduction from points")
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, help_text="Final amount after point discount calculations")
    
    # Tracks how many points were earned or used for this exact invoice
    points_redeemed_here = models.IntegerField(default=0)
    points_earned_here = models.IntegerField(default=0)
    
    payment_method = models.CharField(max_length=10, choices=PAYMENT_METHOD_CHOICES, default='ONLINE')
    payment_reference = models.CharField(max_length=255, blank=True, null=True)
    
    # Logistics
    order_status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='PENDING')
    courier_partner = models.CharField(max_length=15, choices=COURIER_CHOICES, blank=True, null=True)
    tracking_number = models.CharField(max_length=100, blank=True, null=True, unique=True)
    awb_pdf_url = models.URLField(max_length=500, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Order #{self.id} by {self.full_name}"


class OrderItem(models.Model):
    """
    Snapshot of purchased lines inside an order.
    """
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='order_items')
    quantity = models.PositiveIntegerField(default=1)
    price_at_purchase = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity}x {self.product.name if self.product else 'Deleted Product'}"

    @property
    def subtotal(self):
        return self.quantity * self.price_at_purchase