from rest_framework import viewsets
from ...models import Professor
from ..serializers import ProfessorSerializer


class ProfessorViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Professor.objects.all().order_by('id')
    serializer_class = ProfessorSerializer
