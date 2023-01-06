from django.contrib import admin
from .models import Student, CustomUser

# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display=['name','phonenp','email']


# admin.site.register(CustomUser)