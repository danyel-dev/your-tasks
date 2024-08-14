from django.db import models
from django.contrib.auth.models import User


class List(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    title = models.CharField(max_length=70)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.title
    
    
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)    
    title = models.CharField(max_length=50)
    List = models.ForeignKey(List, on_delete=models.CASCADE)
    done = models.BooleanField(default=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.title
    