import React, { useEffect, useState } from 'react';

const NotificationListener = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000/ws/notifications/");  // Adjust WebSocket URL

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setNotifications((prevNotifications) => [...prevNotifications, data.message]);
        };

        ws.onclose = () => {
            console.log("WebSocket disconnected");
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h3>Notifications</h3>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationListener;