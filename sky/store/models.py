from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.username
class Users(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    phone_number = models.IntegerField()
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
   