from unicodedata import name
from django.urls import path
from .import views


urlpatterns = [
    path('login/', views.loginUser, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerUser, name="register user"),
    



    path('', views.profiles, name="profiles"),

    path('profile/<str:kk>/', views.userProfile, name="user-profile" ),
    path('account', views.userAccount, name="account"),
    path('edit-account/', views.editAccount, name="edit-account"),
    path('create-Skill/', views.createSkill, name="create-Skill"),
    path('update-Skill/<str:pk>/', views.updateSkill, name="update-Skill"),
    path('delete-Skill/<str:pk>/', views.deleteSkill, name="delete-Skill"),
    path('inbox/', views.inbox, name= "inbox"),
    path('view-Messages/<str:pk>/', views.viewMessages, name= "view-Messages"),
    path('create-Message/<str:pk>/', views.createMessage, name= "create-Message"),
]