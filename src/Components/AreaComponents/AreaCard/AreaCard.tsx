import React from 'react'
import { Area } from '../../../Services/Models/Area/Area';
import { Link } from 'react-router-dom';
import './AreaCard.css'
interface Props  {
   
    searchResults: Area;
 
}


const AreaCard : React.FC<Props> = ({searchResults}: Props) 
:React.JSX.Element => {
  return <div className="card">
  <div>   
      <p>{searchResults.nombre}</p>
      <p>{searchResults.descripcion}</p>
      <p>{searchResults.ubicacion}</p>
  </div>

  <div className="flex justify-center mt-4">
  <Link  
      to={`/Horarios/${searchResults.id}`}
      state={{ name: searchResults.nombre }}
    >
      <button className="custom-button">
        Reservar
      </button>
    </Link>
  </div>
</div>
};

export default AreaCard