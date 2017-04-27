from django.conf.urls import url
from api import views as local_views
from rest_framework.authtoken import views as rest_framework_views

urlpatterns = [
    url(r'^user/login/$', local_views.LoginViewSet.as_view({'post': 'user_login'})),
    url(r'^user/create/$', local_views.LoginViewSet.as_view({'post': 'create_user'})),

    # Session Login
    url(r'^user/auth/$', rest_framework_views.obtain_auth_token, name='get_auth_token'),

    url(r'^user/data/$', local_views.UserViewSet.as_view({'post': 'user_by_token'})),

    # Contacts request
    url(r'^contacts/$', local_views.ContactViewSet.as_view({'get': 'get_contacts_by_user'})),
    url(r'^friends/$', local_views.FriendViewSet.as_view({'get': 'get_user_friend'})),
]
