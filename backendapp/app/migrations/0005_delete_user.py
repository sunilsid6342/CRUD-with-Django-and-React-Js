# Generated by Django 4.0.4 on 2023-01-04 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_rename_userclass_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
