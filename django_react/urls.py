from django.conf.urls import url, include
from rest_framework import routers
from api import views as local_views
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    url(r'^api/user/login/$', local_views.LoginViewSet.as_view({'post': 'user_login'})),
    url(r'^api/user/create/$', local_views.LoginViewSet.as_view({'post': 'create_user'})),

    # Session Login
    url(r'^api/user/auth/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),

    url(r'^api/user/data/$', local_views.UserViewSet.as_view({'post': 'user_by_token'})),

    # Contacts request
    url(r'^api/contacts/$', local_views.ContactViewSet.as_view({'get': 'get_contacts_by_user'})),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
