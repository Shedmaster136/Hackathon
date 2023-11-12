# from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.status import *
from .models import Users, Levels
from rest_framework.response import Response
from .serializer import LevelsSerializer, UsersSerializer


class CreateUserAPIView(generics.CreateAPIView):
    """Create user"""

    serializer_class = UsersSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = UsersSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e), status=HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        queryset = UsersSerializer.objects.all()
        return queryset


class UpdateUserAPIView(generics.UpdateAPIView):
    """Update info about user"""

    serializer_class = UsersSerializer

    def update_user(self, request, pk=None, *args, **kwargs):

        if not pk:
            return Response({'error': HTTP_405_METHOD_NOT_ALLOWED})

        try:
            _ = Users.objects.get(pk=pk)
        except:
            return Response({'error': 'Objects does not exists'})

        serializer = UsersSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=HTTP_200_OK)

    def get_queryset(self):
        queryset = Users.objects.all()
        return queryset


class CreateLevelsAPIView(CreateAPIView):
    """Create levels"""

    serializer_class = LevelsSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = LevelsSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e), status=HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        queryset = Levels.objects.all()
        return queryset


class LevelsAPIView(generics.ListAPIView):

    """Read users all"""

    serializer_class = LevelsSerializer

    def get_queryset(self):
        queryset = Levels.objects.all()
        return queryset


class SearchUserAPIView(generics.ListAPIView):

    """Search user by login """

    serializer_class = UsersSerializer

    def get_queryset(self):

        name = self.request.query_params.get('name', '')
        queryset = Users.objects.filter(name=name)
        return queryset