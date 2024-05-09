from celery import shared_task
from django.utils import timezone
from .models import Schedule, Booking
from .views import send_reminder_email

@shared_task
def send_reminder_emails():
    # Get upcoming bookings
    bookings = Booking.objects.filter(schedule__time__gte=timezone.now(), schedule__time__lte=timezone.now() + timezone.timedelta(minutes=5))
    
    for booking in bookings:
        # Access the related Schedule object through the booking
        schedule = booking.schedule
        
        # Send reminder email to each user
        send_reminder_email.delay(booking.customer_id.email, schedule)