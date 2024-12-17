
import { useLocation, useParams } from 'react-router-dom';
import Horario from '../../Components/HorarioComponents/Horario/Horario';

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
    <div className="flex flex-col min-h-screen">
    <h2 className="text-center text-4xl font-bold text-gray-800">{name}</h2>
    <Horario Id={id} nombreArea={name}/>

    </div>
   
    </>
  );
};

export default HorarioPage;