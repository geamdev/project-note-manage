interface TableBody {
  items: {
    id: string;
    primer_parcial: string;
    segundo_parcial: string;
    recuperacion: string;
    asignatura: string;
    estudiante: string;
    examen: string;
    profileName: string;
  }[];
  handleDelete: (id: string) => void;
}
