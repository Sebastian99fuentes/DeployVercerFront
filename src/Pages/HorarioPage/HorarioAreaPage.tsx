
import { useLocation, useParams } from 'react-router-dom';
import Horario from '../../Components/HorarioComponents/HorarioArea/Horario';

type Props = {};

const HorarioPage = (props: Props) => {
  const { id } = useParams(); // Captura el id desde la URL
  const location = useLocation();
  const { name } = location.state as { name: string }; // Captura el nombre desde el estado
  if (!id) {
    console.error("ID no encontrado en la URL");
    return <p>URL inválida</p>;
  }
  return (
    <>
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{name}</h2>
      
      <div className="text-center mt-4">
        <p className="text-lg sm:text-xl font-medium">Instrucciones:</p>
        <ul className="text-left mx-auto max-w-xs sm:max-w-md md:max-w-lg space-y-2 mt-2">
          <li className="text-base sm:text-lg">
            🟡 El día de hoy está <span className="text-yellow-500">amarillo</span> y puedes seleccionar horas disponibles.
          </li>
          <li className="text-base sm:text-lg">
            ⚪ Los días siguientes están en blanco y puedes reservar cualquier hora disponible.
          </li>
          <li className="text-base sm:text-lg">
            🚫 Si ves el ícono de prohibido, la hora ya ha pasado o no está disponible.
          </li>
        </ul>
      </div>
      
      {/* Aquí es donde se muestra la información de las reservas */}
      <Horario Id={id} nombreArea={name} />
    </div>
  </>
  
  );
};

export default HorarioPage;