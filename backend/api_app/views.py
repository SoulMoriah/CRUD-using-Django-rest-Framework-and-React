from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import *
from api_app.serializers import PatientSerializer
# Create your views here.


class PatientVewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
