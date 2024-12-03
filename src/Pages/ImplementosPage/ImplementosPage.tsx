import React, { useEffect, useState } from 'react'
import { ImplementosDto } from '../../Services/Models/Implemento/Implemento';
import { ImplemetosGetAll } from '../../Services/Api/CommentsApi/CommentsApi';
import { ImplemetosGet } from '../../Services/Api/ImplementosApi/ImplementosApi';

interface Props  {}

const ImplementosPage = (props: Props) => {

 // Estado para las áreas
 const [implementos, setImplementos] = useState<ImplementosDto[]>([]);

 // Llama a la API y actualiza el estado
 useEffect(() => {
     const AllAreasInit = async () => {
         const result = await ImplemetosGet(); // Obtén las áreas
         setImplementos(result); // Actualiza el estado
     };

     AllAreasInit();
 }, []); // El arreglo vacío asegura que esto se ejecute una vez al montar.

 // Observa los cambios en `areas`
 useEffect(() => {
     console.log("Areas updated:", implementos);
 }, [implementos]); // Este efecto se ejecuta cada vez que `areas` cambie. 



  return <>
    
  <h1>Áreas Disponibles</h1>
  {implementos.length > 0 ? (
      <ul>
          {implementos.map((implemento) => (
              <li key={implemento.id}>
                  <strong>{implemento.nombreImple}</strong>: {implemento.cantidad} 
              </li>
          ))}
      </ul>
  ) : (
      <p>No hay áreas disponibles</p>
  )}
</>
}

export default ImplementosPage