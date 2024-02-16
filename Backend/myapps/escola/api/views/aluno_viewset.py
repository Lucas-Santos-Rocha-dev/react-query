from rest_framework import viewsets
from ...models import Aluno
from ..serializers import AlunoSerializer


class AlunoViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Aluno.objects.all().order_by('id')
    serializer_class = AlunoSerializer
