from flask import json

from api.models import User, Contact
from rest_framework import viewsets
from api.serializers import UserSerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.renderers import JSONRenderer


def get_token(request):
    try:
        return request.META['HTTP_AUTHORIZATION'].replace("Token ", "")
    except ObjectDoesNotExist:
        return "Bad token auth"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    renderer_classes = (JSONRenderer,)

    # Get User data by Token
    def user_by_token(self, request):

        token = get_token(request)

        try:
            user = Token.objects.get(key=token).user

            if user is not None:
                serializer_context = {
                    'request': Request(request),
                }
                serializer = UserSerializer([user], many=True, context=serializer_context)

                # Return User data
                return Response({'user': serializer.data[0]})

        except ObjectDoesNotExist:
            return Response({"token": "Is not active token key"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"user": "Is not active user for this token key"}, status=status.HTTP_400_BAD_REQUEST)


class LoginViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Get User token
    def get_auth_token(self, request):

        # Get params from request
        request_data = json.loads(request.body)
        login = request_data.get('login')
        password = request_data.get('password')

        # Check User authenticate
        user = authenticate(username=login, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key
            # Return User token
            return Response({'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)

    # Create new user and add user vk friend to Contact table
    def create_user(self, request):

        # Get params from request
        request_data = json.loads(request.body)
        vk_id = request_data.get('vk_id')

        # Create new User in database
        user = User.objects.create_user(username=request_data.get('login'),
                                        password=request_data.get('password'),
                                        img=request_data.get('img'),
                                        first_name=request_data.get('first_name'),
                                        last_name=request_data.get('last_name'),
                                        vk_id=vk_id,
                                        vk_token=request_data.get('vk_token'))

        # Find and change user_id if new User have data in Contact table
        try:
            user_in_contact = Contact.objects.get(vk_id=vk_id)
            user_in_contact.user_id = user.id
            user_in_contact.active = True
            user_in_contact.save()
        except ObjectDoesNotExist:
            user_in_contact = None

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key

            serializer_context = {
                'request': Request(request),
            }
            serializer = UserSerializer([user], many=True, context=serializer_context)
            # Return User data and User token
            return Response({'user': serializer.data[0], 'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)

    # Get User data and user token
    def user_login(self, request):

        # Get params from request
        request_data = json.loads(request.body)
        login = request_data.get('login')
        password = request_data.get('password')

        # Check User authenticate
        user = authenticate(username=login, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key

            serializer_context = {
                'request': Request(request),
            }
            serializer = UserSerializer([user], many=True, context=serializer_context)
            # Return User data and User token
            print(serializer)
            print(token.key)
            return Response({'user': serializer.data[0], 'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    renderer_classes = (JSONRenderer,)

    # Get Contacts list bu User id
    def get_contacts_by_user(self, request):

        token = get_token(request)

        try:
            user = Token.objects.get(key=token).user

            if user is not None:
                serializer_context = {
                    'request': Request(request),
                }

                contacts = ContactSerializer(user.contacts, many=True, context=serializer_context).data
                return Response({"contacts": contacts})

        except ObjectDoesNotExist:
            return Response({"token": "Is not active token key"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"user": "Is not active user for this token key"}, status=status.HTTP_400_BAD_REQUEST)
