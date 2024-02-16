from django.db import models


class MateriaChoices(models.TextChoices):
    MATEMATICA = "MATEMATICA", "Matemática"
    HISTORIA = "HISTORIA", "História"
    GEOGRAFIA = "GEOGRAFIA", "Geografia"


class Professor(models.Model):
    nome = models.CharField('Nome', max_length=10)
    materia = models.CharField(
        "Matéria",
        max_length=12,
        choices=MateriaChoices.choices,
        default=MateriaChoices.MATEMATICA,
    )

    class Meta:
        verbose_name = 'Professor'
        verbose_name_plural = 'Professores'
