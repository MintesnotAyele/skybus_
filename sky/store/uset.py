# Assuming UserManager is defined in models.py
from django.contrib.auth.models import User

# Create a superuser
superuser = User.objects.create_superuser(email='admin@example.com', password='adminpassword')

# Save the superuser
superuser.save()
