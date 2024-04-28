# myapp/routing.py
from django.urls import path
from .consumers import NotificationConsumer  # Create this in the next step

websocket_urlpatterns = [
    path("ws/notifications/", NotificationConsumer.as_asgi()),  # WebSocket endpoint
]
