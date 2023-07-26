from django.db import models

class Nota(models.Model):
    estudiante = models.CharField(max_length=100)
    asignatura = models.CharField(max_length=100)
    primer_parcial = models.DecimalField(max_digits=4, decimal_places=2)
    segundo_parcial = models.DecimalField(max_digits=4, decimal_places=2)
    examen = models.DecimalField(max_digits=4, decimal_places=2)
    recuperacion = models.DecimalField(max_digits=4, decimal_places=2)
    fecha = models.DateField()

    def __str__(self):
        return f"{self.estudiante} - {self.asignatura} - {self.primer_parcial} - {self.segundo_parcial} - {self.examen} - {self.recuperacion} - {self.fecha}"
