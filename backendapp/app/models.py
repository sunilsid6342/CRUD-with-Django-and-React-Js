from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.




class Student(models.Model):
    name=models.CharField(max_length=500)
    phonenp=models.IntegerField()
    email=models.EmailField()



# class CustomUser(AbstractUser):
#     name=models.CharField(max_length=200)
#     email=models.CharField(max_length=500,unique=True)
#     password=models.CharField(max_length=500)
#     username=None

#     USERNAME_FIELD="email"
#     REQUIRED_FIELDS=['first_name']

#     class Meta(AbstractUser.Meta):
#         swappable="AUTH_USER_MODEL"
