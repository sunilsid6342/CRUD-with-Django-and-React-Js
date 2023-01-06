from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def student_list(request):
    student=Student.objects.all()
    serials=StudentSerializer(student,many=True)
    # authentication_classes=[JWTAuthentication]
    # permission_class=[IsAuthenticated]
    return Response(serials.data)

@api_view(['POST'])
def student_post(request):
        print(request)
        serials=StudentSerializer(data=request.data)
        if serials.is_valid():
            serials.save();
        return Response(serials.data)

@api_view(['GET','POST','DELETE'])
def studennt(request,pk):
    stu=Student.objects.get(id=pk)
    if request.method=='GET':
        serials=StudentSerializer(stu)
        return Response(serials.data)
    
    if request.method=='POST':
        print(request.data)
        serials=StudentSerializer(stu,data=request.data)
        if serials.is_valid():
            serials.save();
        return Response(serials.data)

    if request.method=='DELETE':
        stu.delete()
        return Response({
            "msg": "delete item"
        })    
