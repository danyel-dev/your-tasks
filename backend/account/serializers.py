from django.contrib.auth.models import User
from rest_framework import serializers


class CreateAccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user