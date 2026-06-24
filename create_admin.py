import os
import django
from django.contrib.auth import get_user_model

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_project_name.settings') # Change to your project name
django.setup()

User = get_user_model()

# Fetch credentials securely from Render environment variables
admin_username = os.environ.get('ADMIN_USERNAME', 'admin')
admin_email = os.environ.get('ADMIN_EMAIL', 'admin@example.com')
admin_password = os.environ.get('ADMIN_PASSWORD')

if admin_password and not User.objects.filter(username=admin_username).exists():
    print(f"Creating superuser account: {admin_username}")
    User.objects.create_superuser(username=admin_username, email=admin_email, password=admin_password)
else:
    print("Superuser profile initialization skipped (already exists or password variable missing).")