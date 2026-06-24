import os
import requests
from django.contrib.auth.models import User
from django.contrib.auth.backends import BaseBackend
from .models import UserProfile, Cart

class SupabaseAuthBackend(BaseBackend):
    """
    Custom Django authentication backend that logs in users based on a 
    verified Supabase JWT Access Token.
    """
    def authenticate(self, request, token=None):
        if not token:
            return None

        # Verify the token directly with your project's Supabase instance
        supabase_url = os.environ.get("SUPABASE_URL") # Add to Render environment
        headers = {
            "Authorization": f"Bearer {token}",
            "apikey": os.environ.get("SUPABASE_ANON_KEY") # Add to Render environment
        }
        
        response = requests.get(f"{supabase_url}/auth/v1/user", headers=headers)
        
        if response.status_code == 200:
            supabase_user_data = response.json()
            supabase_uid = supabase_user_data['id']
            email = supabase_user_data['email']
            
            # Use metadata passed back from Google
            user_metadata = supabase_user_data.get('user_metadata', {})
            full_name = user_metadata.get('full_name', email.split('@')[0])

            # Get or create the Django User account linked to this Supabase UID
            try:
                profile = UserProfile.objects.get(supabase_uid=supabase_uid)
                user = profile.user
            except UserProfile.DoesNotExist:
                # First time logging in? Create a fresh Django account
                user = User.objects.create_user(
                    username=f"sb_{supabase_uid[:15]}", # Generate a unique local username
                    email=email,
                    first_name=full_name.split(' ')[0],
                    last_name=full_name.split(' ')[1] if ' ' in full_name else ''
                )
                # Create the linked profile and a fresh cart row
                profile = UserProfile.objects.create(user=user, supabase_uid=supabase_uid)
                Cart.objects.create(user=user)

            return user
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None