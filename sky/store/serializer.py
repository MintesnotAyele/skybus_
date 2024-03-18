from rest_framework import serializers,generics
from .models import Users,Bus,CustomUser,Schedule
from django.contrib.auth import authenticate, get_user_model

Usermodel=get_user_model()



class UsersSerializer(serializers.ModelSerializer):
    class   Meta:
        model = CustomUser
        fields='__all__'
class UserRegisterSerializer(serializers.ModelSerializer):
     class   Meta:
        model = CustomUser
        fields='__all__'
     def create(self, validated_data):
        user_obj =Usermodel.objects.create_user(email=validated_data['email'],password=validated_data['password'],phone_number=validated_data['phone_number'])
        user_obj.username=validated_data['username']
        user_obj.save()
        return user_obj
class UserLoginSerializer(serializers.ModelSerializer):
    email=serializers.EmailField()
    password=serializers.CharField()
    class   Meta:
        model = CustomUser
        fields = ['email', 'password']
    def check_user(self,validated_data):
        user=authenticate(username=validated_data['email'],password=validated_data['password'])
        if  not user:
            raise  serializers.ValidationError('user not found')
        return user
class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model =Bus
        fields="__all__"
class BusSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ('palte_number',) 
class ScheduleSerializer(serializers.ModelSerializer):
    busPlateNumber=BusSerializer1()
    class  Meta:
        model=Schedule
        fields='__all__'
