# Generated by Django 5.0.4 on 2024-04-11 09:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0016_delete_customtoken'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payment',
            name='booking',
        ),
    ]