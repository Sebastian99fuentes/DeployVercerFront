import React, { useEffect, useState } from 'react'
import FormCRUD from '../../Components/AdminComponents/FormCRUD/FormCRUD'
import './CRUDAdminPage.css'
import { ImplemetosDelete, ImplemetosGet } from '../../Services/Api/ImplementosApi/ImplementosApi'
import { ImplementosDto } from '../../Services/Models/Implemento/Implemento'
import CardImplementos from '../../Components/ImplementComponents/CardImplementos/CardImplementos'
import CardImple from '../../Components/AdminComponents/CardImplementos/CardImple'
import { Area } from '../../Services/Models/Area/Area'
import { AreaDelete, AreasGet } from '../../Services/Api/AreApi/AreaApi'
import CardArea from '../../Components/AdminComponents/CardAreas/CardArea'
import { Link } from 'react-router'
import AllReservasButtons from '../../Components/AdminComponents/AllReservasButtons/AllReservasButtons'
import Spinners from '../../Components/Spinners/Spinners'
import Swal from 'sweetalert2';

type Props = {}

const CRUDAdminPage = (props: Props) => {
   // Estado para las implementos
 const [implementos, setImplementos] = useState<ImplementosDto[]>([]);
  // Estado para las áreas
  const [areas, setAreas] = useState<Area[]>([]);
  const [serverError, setServerError] = useState<string | null>(null); // Estado para el error
  const [loading, setLoading] = useState<boolean>(true); // Estado para el spinner

const AllAreasInit = async () => {
  setLoading(true); // Inicia el spinner
  try {
    const result = await ImplemetosGet(); // Llama a la API
    if (typeof result === "string") {
      setServerError(result); // Si es un error en formato string
    } else if (Array.isArray(result)) {
      setImplementos(result); // Actualiza los implementos
    }
  } catch (error) {
    // Maneja errores inesperados
    setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
  } finally {
    setLoading(false); // Detén el spinner al final
  }
};
const fetchAreas = async () => {
  setLoading(true); // Inicia el spinner
  try {
    const result = await AreasGet(); // Llama a la API
    if (typeof result === "string") {
      setServerError(result); // Maneja errores en formato string
    } else if (Array.isArray(result)) {
      setAreas(result); // Actualiza las áreas si el resultado es válido
    }
  } catch (error) {
    // Manejo de errores inesperados
    console.error("Error inesperado:", error);
    setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
  } finally {
    setLoading(false); // Detén el spinner siempre, sea éxito o error
  }
};

const onReservaDelete = async (id: string) => {
  const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
  });

  if (result.isConfirmed) {
    
     try {
      const result = await AreaDelete(id)
      if(result == ""){
        const removed = areas.filter((area) => area.id !== id);
        setAreas(removed);
        Swal.fire('Eliminado', 'El área ha sido eliminada con éxito.', 'success');
      }
      if (typeof result === "string") {
        setServerError(result); // Maneja errores en formato string
      } else if (Array.isArray(result)) {
        setAreas(result); // Actualiza las áreas si el resultado es válido
      }
    } catch (error) {
      // Manejo de errores inesperados
      console.error("Error inesperado:", error);
      setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
    } finally {
      setLoading(false); // Detén el spinner siempre, sea éxito o error
    }
     
  }
};

const onReservaDeleteImple = async (id: string) => {
  const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
  });

  if (result.isConfirmed) {
    
     try {
      const result = await ImplemetosDelete(id)
      if(result == ""){
        const removed = implementos.filter((implemento) => implemento.id !== id);
        setImplementos(removed);
        Swal.fire('Eliminado', 'El área ha sido eliminada con éxito.', 'success');
      }
      if (typeof result === "string") {
        setServerError(result); // Maneja errores en formato string
      } else if (Array.isArray(result)) {
        setImplementos(result); // Actualiza las áreas si el resultado es válido
      }
    } catch (error) {
      // Manejo de errores inesperados
      console.error("Error inesperado:", error);
      setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
    } finally {
      setLoading(false); // Detén el spinner siempre, sea éxito o error
    }
     
  }
};

const updateImplemento = (updatedImplemento: ImplementosDto) => {
  setImplementos((prevImplementos) =>
    prevImplementos.map((implemento) =>
        implemento.id === updatedImplemento.id ? updatedImplemento : implemento
    )
  );
};


const updateArea = (updatedArea: Area) => {
  setAreas((prevAreas) =>
    prevAreas.map((area) =>
      area.id === updatedArea.id ? updatedArea : area
    )
  );
};

useEffect(() => {    
         fetchAreas(); // Ejecuta la función
         AllAreasInit();
 }, []); // Ejecutar una vez al montar el componente     




  return<>
      <div className='text-center text-2xl font-bold text-gray-800'>
    <p> Crea, modifica y elimina  Implementos Deportivos y Espacios Físicos</p>
    </div>
  <div className='crud'>
  </div>
  <div className='text-center text-2xl font-bold text-gray-800'>
    <p> Crea un Implemento Deportivo o Espacio Físico</p>
    </div>
  <FormCRUD />
  <div className='text-center text-2xl font-bold text-gray-800'>
    <p> Modifica y elimina Implementos Deportivos</p>
    </div>
    {loading ? (
          // Mostrar spinner mientras está cargando
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Spinners />
          </div>
        ) : implementos.length > 0 ? (
          // Mostrar implementos si se obtuvieron con éxito
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {implementos.map((implemento) => (
              <CardImple
               key={implemento.id} 
               searchResults={implemento}
                onReservaDelete={onReservaDeleteImple}  
                 onReservaUpdate={updateImplemento}/>
            ))}
          </div>
        ) : (
          // Mostrar mensaje de error si la API está caída
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {serverError ? (
              <h1 className="text-red-500 text-xl">{serverError}</h1>
            ) : (
              <h1>No hay Implementos Deportivos disponibles</h1>
            )}
          </div>
     )}




<div className='text-center text-2xl font-bold text-gray-800'>
    <p> Modifica y elimina Espacios Físicos</p>
    </div>
        {loading ? (
          // Mostrar spinner mientras está cargando
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Spinners />
          </div>
        ) : areas.length > 0 ? (
          // Mostrar áreas si se obtuvieron con éxito
          <div className="flex flex-wrap justify-center gap-6 p-4">
          {areas.map((area) => (
              <CardArea 
              key={area.id} 
              searchResults={area} 
              onReservaDelete={onReservaDelete}
              // onReservaUpdate={updateArea}
              />
          ))}
      </div>
        ) : (
          // Mostrar mensaje de error si la API está caída
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {serverError ? (
              <h1 className="text-red-500 text-xl">{serverError}</h1>
            ) : (
              <h1>No hay áreas disponibles</h1>
            )}
          </div>
        )}    
  </> 
  


}

export default CRUDAdminPage


