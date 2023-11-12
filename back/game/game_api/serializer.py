from rest_framework import serializers
from .models import Levels, Users, LevelsName


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'name', 'password']


class LevelsSerializer(serializers.ModelSerializer):
    name_level = serializers.SlugRelatedField(slug_field='name', queryset=LevelsName.objects.all())
    user = serializers.SlugRelatedField(slug_field='name', queryset=Users.objects.all())

    class Meta:
        model = Levels
        fields = ['user', 'name_level', 'score']


class LevelsNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = LevelsName
        fields = ['id_name', 'name']
