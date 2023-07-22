from django.db import models

class Nota(models.Model):
    estudiante = models.CharField(max_length=100)
    asignatura = models.CharField(max_length=100)
    nota = models.DecimalField(max_digits=4, decimal_places=2)
    fecha = models.DateField()

    def __str__(self):
        return f"{self.estudiante} - {self.asignatura}: {self.nota}"
