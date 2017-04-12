# coding: utf-8

from __future__ import unicode_literals
import re

from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin,
                                        UserManager)
from django.core.mail import send_mail
from django.core import validators
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.utils.http import urlquote
from django.db import models


class Contact(models.Model):
    first_name = models.CharField(max_length=255)  # Contact first name
    last_name = models.CharField(max_length=255)  # Contact last name
    img = models.CharField(max_length=255)  # Contact image url
    vk_id = models.CharField(max_length=100)  # Contact vk id
    active = models.BooleanField()  # Is contact active
    user_id = models.IntegerField()  # Contact to User


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(_('username'), max_length=30, unique=True,
                                help_text=_('Required. 30 characters or fewer. Letters, numbers and '
                                            '@/./+/-/_ characters'),
                                validators=[
        validators.RegexValidator(re.compile(
            '^[\w.@+-]+$'), _('Enter a valid username.'), 'invalid')
    ])
    email = models.EmailField(_('email address'), max_length=254, unique=True)
    is_staff = models.BooleanField(_('staff status'), default=False,
                                   help_text=_('Designates whether the user can log into this admin '
                                               'site.'))
    is_active = models.BooleanField(_('active'), default=True,
                                    help_text=_('Designates whether this user should be treated as '
                                                'active. Unselect this instead of deleting accounts.'))
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    contacts = models.ManyToManyField(Contact, through='ContactUser')  # Contacts list for vk
    img = models.CharField(max_length=255, null=True)  # User image url
    vk_id = models.CharField(max_length=100, null=True)  # User vk id
    vk_token = models.CharField(max_length=100, null=True, unique=True)  # User vk token


    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def __unicode__(self):
        return self.username

    def get_absolute_url(self):
        return "/users/%s/" % urlquote(self.username)

    def get_full_name(self):
        full_name = self.full_name
        return full_name.strip()

    def get_short_name(self):
        return self.short_name.strip()

    def email_user(self, subject, message, from_email=None):
        send_mail(subject, message, from_email, [self.email])


class ContactUser(models.Model):
    contact_id = models.ForeignKey(Contact, on_delete=models.CASCADE)  # Contact id
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # User id


class Message(models.Model):
    user_from_id = models.IntegerField()  # User id
    user_to_id = models.IntegerField()  # User id
    text = models.TextField()  # Message text
    date = models.DateTimeField()  # Message date


class Friend(models.Model):
    user1_id = models.IntegerField()
    user2_id = models.IntegerField()
