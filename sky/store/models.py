from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser, Group,Permission,PermissionsMixin
class UserManager(BaseUserManager):
    def create_user(self,email,password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError("A password is required.")
        email =self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,email,password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError("A password is required.")
        user =self.create_user(email,password)
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
        return self.username

    # Add related_name to avoid clashes
    groups = models.ManyToManyField(Group, related_name='custom_user_groups', blank=True, verbose_name=('groups'))
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_permissions', blank=True, verbose_name=('user permissions'))

    def str(self):
        return self.email


class Users(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    def str(self):
        return self.username
class Bus(models.Model):
    palte_number=models.CharField(max_length=50,unique=True)
    number_of_site=models.IntegerField()
    owner_name=models.CharField(max_length=100)
    owner_ac=models.IntegerField()
class Schedule(models.Model):
    busPlateNumber= models.ForeignKey(Bus,on_delete=models.CASCADE)
    date=models.DateField()
    destination=models.CharField(max_length=100)
    time=models.TimeField()
    price=models.IntegerField()
class Availability(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    available_seats = models.IntegerField()

class Booking(models.Model):
    booking_id = models.AutoField(primary_key=True)
    customer_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE,null=True)
    booking_date = models.DateTimeField(auto_now_add=True)
    seat_number = models.IntegerField()
class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=100)
    payment_status = models.CharField(max_length=50)
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE)
   