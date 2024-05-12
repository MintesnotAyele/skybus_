from rest_framework import serializers,generics
from .models import Bus,CustomUser,Schedule,Booking,Canclerequest,Payment,Profile,Feedback
from django.contrib.auth import authenticate, get_user_model



Usermodel=get_user_model()
class UserbookSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['id','email','phone_number']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=Feedback
        fields='__all__'
class UserCreateSerializer(serializers.ModelSerializer):
    class  Meta:
        model =Usermodel
        fields=['id','email','password','phone_number','username','first_name','last_name']

class UsersSerializer(serializers.ModelSerializer):
    class   Meta:
        model = CustomUser
        fields='__all__'
class ProfileSerializer(serializers.ModelSerializer):
    user=UsersSerializer()
    class Meta:
        model=Profile
        fields='__all__'
class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usermodel
        fields=['is_staff','is_active']
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
class ScheduleSerializer1(serializers.ModelSerializer):
    class  Meta:
        model=Schedule
        fields='__all__'
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields='__all__'
class BookingSerializer1(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields=['seat_number']
class UsersSerializer1(serializers.ModelSerializer):
    email_verified = serializers.BooleanField(default=False, write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password','phone_number', 'email_verified']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user

class BookingE(serializers.ModelSerializer):
    customer_id=UserbookSerializer()
    schedule=ScheduleSerializer()
    class Meta:
        model=Booking
        fields='__all__'
class BookingF(serializers.ModelSerializer):
    schedule=ScheduleSerializer()
    class Meta:
        model=Booking
        fields='__all__'
class CancleSerializer(serializers.ModelSerializer):
    bookingid=BookingE()
    class  Meta:
        model=Canclerequest
        fields='__all__'
class PaymentSerializer(serializers.ModelSerializer):
    user=UsersSerializer()
    booking=BookingSerializer()
    class Meta:
        model=Payment
        fields='__all__'
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=Feedback
        fields='__all__'