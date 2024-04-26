from django.contrib import admin
from store.models import  Bus,Schedule,Availability,Booking,Payment


admin.site.register(Bus)
admin.site.register(Schedule)
admin.site.register(Availability)
admin.site.register(Booking)
admin.site.register(Payment)

