from rest_framework import serializers
from api_app.models import Patient


class PatientSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Patient
        fields = "__all__"
