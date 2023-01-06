from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['id','name','phonenp','email']
        model=Student