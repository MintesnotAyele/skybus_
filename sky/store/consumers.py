# myapp/consumers.py
from channels.generic.websocket import AsyncWebsocketConsumer
import json

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Add the WebSocket connection to a group to send messages to all connected clients
        await self.channel_layer.group_add("admin_notifications", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Remove the WebSocket connection from the group
        await self.channel_layer.group_remove("admin_notifications", self.channel_name)

    async def receive(self, text_data):
        # Handle incoming messages from the client if needed
        pass

    async def send_notification(self, event):
        # Broadcast a message to all clients in the group
        message = event["message"]
        await self.send(text_data=json.dumps({"message": message}))
