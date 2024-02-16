from django.db import models


class Aluno(models.Model):
    nome = models.CharField('Nome', max_length=10)
    sobrenome = models.CharField('Sobrenome', max_length=10)

    class Meta:
        verbose_name = 'Aluno'
        verbose_name_plural = 'Alunos'