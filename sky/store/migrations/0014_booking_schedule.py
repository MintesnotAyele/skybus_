# Generated by Django 4.2.6 on 2024-04-03 09:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0013_canclerequest_requested_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='schedule',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='store.schedule'),
        ),
    ]
