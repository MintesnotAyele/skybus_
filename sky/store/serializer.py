from rest_framework import serializers
from .models import Users,Bus,CustomUser
from django.contrib.auth import authenticate, get_user_model

Usermodel=get_user_model()


class UsersSerializer(serializers.ModelSerializer):
    class   Meta:
        model = Usermodel
        fields=( 'id','username','email','password','phone_number')
class UserRegisterSerializer(serializers.ModelSerializer):
     class   Meta:
        model = Usermodel
        fields='__all__'
     def create(self, validated_data):
        user_obj =Usermodel.objects.create_user(email=validated_data['email'],password=validated_data['password'],phone_number=validated_data['phone_number'])
        user_obj.username=validated_data['username']
        user_obj.save()
        return user_obj
class UserLoginSerializer(serializers.ModelSerializer):
    email=serializers.EmailField()
    password=serializers.CharField()
    def check_user(self,validated_data):
        user=authenticate(username=validated_data['email'],password=validated_data['password'])
        if  not user:
            raise  serializers.ValidationError('user not found')
        return user