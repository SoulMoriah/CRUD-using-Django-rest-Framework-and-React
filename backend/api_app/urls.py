from django.contrib import admin
from django.urls import path, include
from api_app.views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'patient', PatientVewSet)

urlpatterns = [
    path('', include(router.urls))
]
