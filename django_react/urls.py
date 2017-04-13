from django.conf.urls import url, include
from rest_framework import routers
from api import views as local_views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    url(r'^api/user/login/$', local_views.UserViewSet.as_view({'post': 'get_user'})),

    # Session Login
    url(r'^api/user/auth/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
