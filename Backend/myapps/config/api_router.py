from rest_framework.routers import DefaultRouter

from escola.api.views import AlunoViewSet, ProfessorViewSet


router = DefaultRouter()
router.register("alunos", AlunoViewSet)
router.register("professores", ProfessorViewSet)

app_name = "api"
urlpatterns = router.urls
