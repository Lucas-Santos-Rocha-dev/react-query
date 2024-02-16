# Generated by Django 5.0.2 on 2024-02-15 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aluno',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=10, verbose_name='Nome')),
                ('sobrenome', models.CharField(max_length=10, verbose_name='Sobrenome')),
            ],
            options={
                'verbose_name': 'Aluno',
                'verbose_name_plural': 'Alunos',
            },
        ),
        migrations.CreateModel(
            name='Professor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=10, verbose_name='Nome')),
                ('materia', models.CharField(choices=[('MATEMATICA', 'Matemática'), ('HISTORIA', 'História'), ('GEOGRAFIA', 'Geografia')], default='MATEMATICA', max_length=12, verbose_name='Matéria')),
            ],
            options={
                'verbose_name': 'Professor',
                'verbose_name_plural': 'Professores',
            },
        ),
    ]
