"""
URL configuration for game project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from game_api.views import CreateUserAPIView, UpdateUserAPIView, CreateLevelsAPIView, LevelsAPIView,\
                        SearchUserAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/user/', CreateUserAPIView.as_view()),
    path('api/v1/search/', SearchUserAPIView.as_view()),
    path('api/v1/user/update/<int:pk>', UpdateUserAPIView.as_view()),
    path('api/v1/levels/', CreateLevelsAPIView.as_view()),
    path('api/v1/level/all/', LevelsAPIView.as_view()),
]
