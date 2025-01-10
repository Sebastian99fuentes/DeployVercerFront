import  { useEffect, useState } from 'react'
import { Area,  } from '../../Services/Models/Area/Area';
import { AreasGet } from '../../Services/Api/AreApi/AreaApi';
import AreaCard from '../../Components/AreaComponents/AreaCard/AreaCard';
import Spinners from '../../Components/Spinners/Spinners';


const AreasPage = () => {
    // Estado para las áreas
    const [areas, setAreas] = useState<Area[]>([]);
    const [serverError, setServerError] = useState<string | null>(null); // Estado para el error
    const [loading, setLoading] = useState<boolean>(true); // Estado para el spinner
  
    useEffect(() => {
      
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
      
        fetchAreas(); // Ejecuta la función
      }, []); // Ejecutar una vez al montar el componente
      
    useEffect(() => {
      console.log("Áreas actualizadas:", areas);
    
    }, [areas]);
  
    return<>
      <div className="flex flex-col min-h-screen">

        <h1 className="text-center text-4xl font-bold text-gray-800">Áreas Disponibles</h1>
        {loading ? (
          // Mostrar spinner mientras está cargando
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Spinners /><p>Cargando Areas...</p>
          </div>
        ) : areas.length > 0 ? (
          // Mostrar áreas si se obtuvieron con éxito
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {areas.map((area) => (
              <AreaCard key={area.id} searchResults={area} />
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
        </div>
    </> ;
  };
  
  export default AreasPage;

