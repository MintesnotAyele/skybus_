from rest_framework import serializers
from .models import Users,Bus,CustomUser
from django.contrib.auth import authenticate


class UsersSerializer(serializers.ModelSerializer):
    class   Meta:
        model = CustomUser
        fields=( 'id','username','email','password','phone_number')