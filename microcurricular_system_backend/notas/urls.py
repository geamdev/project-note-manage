from django.urls import path
from .views import NotaListCreateView, NotaRetrieveUpdateDestroyView

urlpatterns = [
    path('notas/', NotaListCreateView.as_view(), name='nota-list-create'),
    path('notas/<int:pk>/', NotaRetrieveUpdateDestroyView.as_view(), name='nota-retrieve-update-destroy'),
]
