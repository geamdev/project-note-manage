import axios from "axios";
import { useState } from "react";
import { FormContainer, Content } from "./Form.styles";

interface Props {
  isEditing?: boolean;
}

const Form: React.FC<Props> = ({ isEditing }) => {
  const [formData, setFormData] = useState({
    name: "",
    assignature: "",
    first: "",
    second: "",
    exam: "",
    recovery: "",
  });

  const options = {
    method: "POST",
    url: "http://localhost:8000/api/notas/",
    headers: { "Content-Type": "application/json" },
    data: {
      estudiante: formData.name,
      asignatura: formData.assignature,
      primer_parcial: formData.first,
      segundo_parcial: formData.second,
      examen: formData.exam,
      recuperacion: formData.recovery,
      fecha: "2021-10-10",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.request(options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Content>
      <h2>{isEditing ? "Edit Notes" : "Add Notes"}</h2>
      <FormContainer onSubmit={onSubmit}>
        <label htmlFor="name">Student</label>
        <select
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        >
          <option value="">-- SELECT STUDENT --</option>
          {[
            "GEAMPIERE VIRGILIO JARAMILLO MALDONADO",
            "JUAN LEONEL PEREZ VILLACIS",
            "OWEN ELIU BOZA SEMEN",
            "MARIA EMILIA SANCHEZ VELIZ",
          ].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="name">Assignature</label>
        <select
          id="assignature"
          name="assignature"
          value={formData.assignature}
          onChange={handleChange}
        >
          <option value="">-- SELECT ASSIGNATURE --</option>
          {[
            "BENEMERITA DE LA INFANCIA",
            "BASE DE DATOS AVANZADA",
            "FUNDAMENTOS DE ADMINISTRACIÓN",
            "INGLÉS B1.1 (TECHNICAL)",
            "PROGRAMACIÓN VISUAL",
            "CÁLCULO DIFERENCIAL INTEGRAL",
            "DISEÑO MULTIMEDIA",
          ].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="name">First Partial</label>
        <input
          type="text"
          id="first"
          required
          value={formData.first}
          onChange={handleChange}
        />
        <label htmlFor="phone">Second Partial</label>
        <input
          type="text"
          id="second"
          required
          value={formData.second}
          onChange={handleChange}
        />
        <label htmlFor="email">Exam</label>
        <input
          type="text"
          id="exam"
          value={formData.exam}
          onChange={handleChange}
        />
        <label htmlFor="address">Recovery</label>
        <input
          type="text"
          id="recovery"
          value={formData.recovery}
          onChange={handleChange}
        />
        <button type="submit">{isEditing ? "Save Changes" : "Save"}</button>
      </FormContainer>
    </Content>
  );
};

export default Form;
