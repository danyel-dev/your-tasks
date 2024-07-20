from rest_framework import serializers
from .models import Task, List


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'url', 'user', 'title', 'List', 'done', 'created_at', 'updated_at']
        
        
class ListSerializer(serializers.HyperlinkedModelSerializer):
    task_set = TaskSerializer(many=True)
    
    class Meta:
        model = List
        fields = ['id', 'url', 'user', 'title', 'description', 'task_set', 'created_at', 'updated_at']
