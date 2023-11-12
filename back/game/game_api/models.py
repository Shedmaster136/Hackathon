from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=25, verbose_name='User', unique=True)
    password = models.CharField(max_length=50, verbose_name='password')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'User'


class Levels(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    name_level = models.ForeignKey('LevelsName', max_length=25, verbose_name='name_level', on_delete=models.CASCADE)
    score = models.IntegerField(default=0, verbose_name='score')

    # def __str__(self):
    #     return self.user

    class Meta:
        verbose_name_plural = 'level'


class LevelsName(models.Model):
    id_name = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'level_name'

