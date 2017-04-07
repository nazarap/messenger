# coding: utf-8

from django.db import models


class Contact(models.Model):
    first_name = models.CharField(max_length=255)  # Contact first name
    last_name = models.CharField(max_length=255)  # Contact last name
    img = models.CharField(max_length=255)  # Contact image url
    vk_id = models.CharField(max_length=100)  # Contact vk id
    active = models.BooleanField()  # Is contact active
    user_id = models.IntegerField()  # Contact to User


class User(models.Model):
    contacts = models.ManyToManyField(Contact, through='ContactUser')  # Contacts list for vk
    first_name = models.CharField(max_length=255)  # User first name
    last_name = models.CharField(max_length=255)  # User last name
    img = models.CharField(max_length=255)  # User image url
    vk_id = models.CharField(max_length=100)  # User vk id
    vk_token = models.CharField(max_length=100, blank=True, unique=True)  # User vk token
    token = models.CharField(max_length=100, blank=True, unique=True)  # User token
    login = models.CharField(max_length=255)  # User login
    password = models.CharField(max_length=255)  # User password


class ContactUser(models.Model):
    contact_id = models.ForeignKey(Contact, on_delete=models.CASCADE)  # Contact id
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # User id


class Message(models.Model):
    user_from_id = models.IntegerField()  # User id
    user_to_id = models.IntegerField()  # User id
    text = models.TextField()  # Message text
    date = models.DateTimeField()  # Message date
