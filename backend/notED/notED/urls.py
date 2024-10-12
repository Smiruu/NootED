"""
URL configuration for StudyGroup project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('user.urls')),
    path('api/groups/', include('groups.urls')),
    path('api/todolist/', include('to_do_list.urls')),
<<<<<<< HEAD
    path('api/chats/', include('chats.urls')),
    path('api/notes/', include('notes.urls')),
    path('api/announcements/', include('announcements.urls')),
=======
<<<<<<< HEAD
    path('api/chats/', include('chats.urls')),
    path('api/notes/', include('notes.urls')),
=======
>>>>>>> ea02320ddf823a940391e1a5dc9f5f5911faf392
>>>>>>> 955ce4d6a4db18e4c721bef8cfef6111f698c49d
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings .DEBUG:
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns = urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)