# Generated by Django 3.2.14 on 2022-08-30 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flight_app', '0012_ticket'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='Seats',
            field=models.IntegerField(default=1),
        ),
    ]
