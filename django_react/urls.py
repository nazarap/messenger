from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users-api', views.UserViewSet)
router.register(r'contacts-api', views.ContactViewSet)

users = views.UserViewSet.as_view({
    'get': 'get_user'
})

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/users/(?P<user_id>\d+)/$', users, name='get_user'),
    url(r'^django/api/', include('rest_framework.urls', namespace='rest_framework')),
]
