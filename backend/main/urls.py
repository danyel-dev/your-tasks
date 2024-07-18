from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from . import views
from task.views import TaskViewSet
from task.views import ListViewSet
from account.views import createAccountView


router = routers.DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'lists', ListViewSet)


urlpatterns = [
    path('createAccount', createAccountView.as_view(), name='createAccount'),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
