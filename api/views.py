from flask import json

from api.models import User, Contact
from rest_framework import viewsets
from api.serializers import UserSerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework.request import Request
from django.conf import settings
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from rest_framework.authtoken.models import Token
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_auth_token(self, request):
        request_data = json.loads(request.body)
        login = request_data.get('login')
        password = request_data.get('password')

        user = authenticate(username=login, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key
            return Response({'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)

    def get_user(self, request):
        request_data = json.loads(request.body)
        login = request_data.get('login')
        password = request_data.get('password')

        user = authenticate(username=login, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            request.session['auth'] = token.key

            serializer_context = {
                'request': Request(request),
            }
            serializer = UserSerializer([user], many=True, context=serializer_context)
            return Response({'user': serializer.data[0], 'token': token.key})
        return Response({"non_field_errors": "Unable to log in with provided credentials."}, status=status.HTTP_400_BAD_REQUEST)
