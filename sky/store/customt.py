from django.db import models
from django.conf import settings
from rest_framework.authtoken.models import Token

class CustomToken(Token):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='auth_token')

    # Optionally, add any additional fields or methods you need
