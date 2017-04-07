from api.models import User, Contact, ContactUser
from rest_framework import viewsets
from api.serializers import UserSerializer, ContactSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_user(self, request, user_id):
        u = User.objects.get(id=user_id)

        serializer_context = {
            'request': Request(request),
        }

        contacts = ContactSerializer(u.contacts, many=True, context=serializer_context).data
        serializer = UserSerializer([u], many=True, context=serializer_context)
        return Response({'user': serializer.data[0], "contacts": contacts})



class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def list1(self, request):
        return Response("u", status=status.HTTP_400_BAD_REQUEST)
