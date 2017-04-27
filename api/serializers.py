from api.models import User, Contact, Friend, Message
from rest_framework import serializers


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'first_name', 'last_name', 'img', 'vk_id', 'user_id', 'active')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'img', 'vk_id', 'first_name', "last_name")


class FriendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Friend
        fields = ('user1_id', 'user2_id')


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('user_from_id', 'user_to_id', 'text', 'date')
