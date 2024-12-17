import  { useEffect, useState } from 'react'
import { ImplementosDto } from '../../Services/Models/Implemento/Implemento';
import { ImplemetosGet } from '../../Services/Api/ImplementosApi/ImplementosApi';
import CardUnit from '../../Components/ImplementComponents/CardImplementos/CardImplementos';

import './ImplementosPage.css';
import Spinners from '../../Components/Spinners/Spinners';



const ImplementosPage = () => {
    // Estado para los implementos
    const [implementos, setImplementos] = useState<ImplementosDto[]>([]);
    const [serverError, setServerError] = useState<string | null>(null); // Estado para el error
    const [loading, setLoading] = useState<boolean>(true); // Estado para el spinner
  
    useEffect(() => {
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
  
      AllAreasInit();
    }, []);
  
    useEffect(() => {
      console.log("Implementos actualizados:", implementos);
    }, [implementos]);
  
    return (

       <div className="flex flex-col min-h-screen">

       <h1 className="text-center text-4xl font-bold text-gray-800">Implementos Disponibles</h1>
        {loading ? (
          // Mostrar spinner mientras está cargando
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Spinners />
          </div>
        ) : implementos.length > 0 ? (
          // Mostrar implementos si se obtuvieron con éxito
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {implementos.map((implemento) => (
              <CardUnit key={implemento.id} searchResults={implemento} />
            ))}
          </div>
        ) : (
          // Mostrar mensaje de error si la API está caída
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {serverError ? (
              <h1 className="text-red-500 text-xl">{serverError}</h1>
            ) : (
              <h1>No hay implementos disponibles</h1>
            )}
          </div>
        )}
        
       </div>
    );
  };
  
  export default ImplementosPage;