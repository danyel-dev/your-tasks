from rest_framework import serializers
from .models import Task, List


class ListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = List
        fields = ['id', 'url', 'user', 'title', 'description', 'created_at', 'updated_at']


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'url', 'user', 'title', 'done', 'created_at', 'updated_at']
