from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser, Group,Permission,PermissionsMixin
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.utils import timezone
from channels.layers import get_channel_layer
class UserManager(BaseUserManager):
    def create_user(self,email,first_name=None,last_name=None,password=None,phone_number=None,username=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError("A password is required.")
        email =self.normalize_email(email)
        user = self.model(email=email,first_name=first_name,last_name=last_name, phone_number=phone_number,username=username)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,email,password=None,phone_number=None,username=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError("A password is required.")
        user =self.create_user(email,password,phone_number,username)
        user.is_superuser=True
        user.save()
        return user
    
        
class CustomUser(AbstractUser,PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    

    USERNAME_FIELD='email'
    REQUIRED_FIELDS =['username','phone_number']
    objects=UserManager()
    def __str__(self):
        return self.email
class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    balance = models.IntegerField()
    
class Bus(models.Model):
    palte_number=models.CharField(max_length=50,unique=True)
    number_of_site=models.IntegerField()
    owner_name=models.CharField(max_length=100)
    owner_ac=models.IntegerField()
    city=models.CharField(max_length=50,null=True )
class Schedule(models.Model):
    busPlateNumber= models.ForeignKey(Bus,on_delete=models.CASCADE)
    date=models.DateField()
    destination=models.CharField(max_length=100)
    time=models.TimeField()
    price=models.IntegerField()
    available_seats = models.IntegerField(null=True)
class Availability(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    available_seats = models.IntegerField()

class Booking(models.Model):
    schedule=models.ForeignKey(Schedule, on_delete=models.CASCADE,null=True)
    booking_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    seat_number = models.IntegerField() 
class Payment(models.Model):
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True)
    payment_id = models.AutoField(primary_key=True)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20, default='pending')
    transaction_id = models.CharField(max_length=100,unique=True) 
class Canclerequest(models.Model):
    bookingid=models.ForeignKey(Booking,on_delete=models.CASCADE)
    Requested_time=models.DateTimeField(auto_now_add=True)

#@receiver(post_save, sender=Canclerequest)
#async def notify_admin_on_cancellation(sender, instance, created, **kwargs):
    #if created:
       # channel_layer = get_channel_layer()
       # message = {
            #"message": f"New ticket cancellation request from {instance.bookingid}. Ticket ID: {instance.bookingid}",
       # }
        #await channel_layer.group_send("admin_notifications", message)

class Feedback(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField()
    reating=models.IntegerField()
    feedback=models.TextField()