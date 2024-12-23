
import React, { useState } from "react";
import './FormCRUD.css'
import { ImplemetosCreate } from "../../../Services/Api/ImplementosApi/ImplementosApi";
import { toast } from "react-toastify";
import { AreaCreate } from "../../../Services/Api/AreApi/AreaApi";
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

type FormType = "implemento" | "area";

const FormCRUD: React.FC = () => {
   const [formType, setFormType] = useState<FormType>("implemento");

  const [implemento, setImplemento] = useState({
    nombreImple: "",
    cantidad: 0,
  });

  const [area, setArea] = useState({
    Nombre: "",
    Ubicacion: "",
    Descripcion: "",
  });
 // Esquemas de validación para Yup
 const implementoSchema = Yup.object().shape({
  nombreImple: Yup.string().required("El nombre del implemento es obligatorio."),
  cantidad: Yup.number()
    .required("La cantidad es obligatoria.")
    .min(1, "La cantidad debe ser mayor a 0."),
});

const areaSchema = Yup.object().shape({
  Nombre: Yup.string().required("El nombre del área es obligatorio."),
  Ubicacion: Yup.string().required("La ubicación es obligatoria."),
  Descripcion: Yup.string().required("La descripción es obligatoria."),
});
  

  const handleImplementoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setImplemento({
      ...implemento,
      [e.target.name]: e.target.value,
    });
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArea({
      ...area,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (formType === "implemento") {
        // Validar implemento con Yup
        await implementoSchema.validate(implemento, { abortEarly: false });
        console.log("Enviando implemento:", implemento);
        await ImplemetosCreate(implemento.nombreImple, implemento.cantidad);
        toast.success("Se creó el implemento con éxito.");
      } else {
        // Validar área con Yup
        await areaSchema.validate(area, { abortEarly: false });
        console.log("Enviando área:", area);
        await AreaCreate(area.Nombre, area.Ubicacion, area.Descripcion);
        toast.success("Se creó el área con éxito.");
      }
    } catch (validationError) {
      if (validationError instanceof Yup.ValidationError) {
        validationError.errors.forEach((error) => toast.error(error));
        
      } else {
        toast.error("Error inesperado al enviar los datos.");
      }
    }
  };

  return (
    
    <div className="cuerpo">
    <div className="cardCrud">
      <h1>Crear {formType === "implemento" ? "Implemento" : "Área"}</h1>
      <div className="button-group">
        <button onClick={() => setFormType("implemento")}>Crear Implemento</button>
        <button onClick={() => setFormType("area")}>Crear Área</button>
      </div>

      <form onSubmit={handleSubmit}>
        {formType === "implemento" ? (
          <>
            <div>
              <label>nombre:</label>
              <input
                type="text"
                name="nombreImple"
                value={implemento.nombreImple}
                onChange={handleImplementoChange}
              />
            </div>
            <div>
              <label>Cantidad:</label>
              <input
                type="number"
                name="cantidad"
                value={implemento.cantidad}
                onChange={handleImplementoChange}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="Nombre"
                value={area.Nombre}
                onChange={handleAreaChange}
              />
            </div>
            <div>
              <label>Ubicación:</label>
              <textarea
                name="Ubicacion"
                value={area.Ubicacion}
                onChange={handleAreaChange}
              />
            </div>
            <div>
              <label>descripcion:</label>
              <textarea
                name="Descripcion"
                value={area.Descripcion}
                onChange={handleAreaChange}
              />
            </div>
          </>
        )}

        <button  className="buttonCrud" type="submit">Guardar</button>
      </form>
    </div>
    </div>
  );
};

export default FormCRUD;
