from django.contrib import admin
from .models import Users, Levels,LevelsName


@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'password']
    list_display_links = ['id', 'name', 'password']


@admin.register(Levels)
class LevelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'name_level', 'score']


@admin.register(LevelsName)
class LevelsNameAdmin(admin.ModelAdmin):
    list_display = ['id_name', 'name']


