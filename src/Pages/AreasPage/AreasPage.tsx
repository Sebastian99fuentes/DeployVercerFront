import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Area, Areas } from '../../Services/Models/Area/Area';
import { getAllAreas, getAllAreas2 } from '../../Services/api';
import CardReservas from '../../Components/CardReservas/CardReservas';
import { GetAllAreas, getAreas2 } from '../../Services/Api/AreApi/AreaApi';

interface Props  {}

const AreasPage = (props: Props) => {

 // Estado para las áreas
 const [areas, setAreas] = useState<Area[]>([]);

 // Llama a la API y actualiza el estado
 useEffect(() => {
     const AllAreasInit = async () => {
         const result = await getAreas2(); // Obtén las áreas
         setAreas(result); // Actualiza el estado
     };

     AllAreasInit();
 }, []); // El arreglo vacío asegura que esto se ejecute una vez al montar.

 // Observa los cambios en `areas`
 useEffect(() => {
     console.log("Areas updated:", areas);
 }, [areas]); // Este efecto se ejecuta cada vez que `areas` cambie. 


  return<>
     
            <h1>Áreas Disponibles</h1>
            {areas.length > 0 ? (
                <ul>
                    {areas.map((area) => (
                        <li key={area.id}>
                            <strong>{area.nombre}</strong>: {area.descripcion} - {area.ubicacion}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay áreas disponibles</p>
            )}
  </>
};

export default AreasPage