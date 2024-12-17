import React from 'react'
import { ImplementosDto } from '../../../Services/Models/Implemento/Implemento';
import { Link } from 'react-router-dom';

import './CardImplementos.css'
interface Props  {
   
    searchResults: ImplementosDto;
 
}


const CardImplementos : React.FC<Props> = ({searchResults}: Props) 
    
:React.JSX.Element=> {
  return (
    <div className="card">
      <div>   
          {searchResults.nombreImple}
      </div>

      <div className="flex justify-center mt-4">
      <Link  
          to={`/HorariosImp/${searchResults.id}`}
          state={{ name: searchResults.nombreImple }}
        >
          <button className="custom-button">
            Reservar
          </button>
          
        </Link>
      </div>
  </div>
  );
};

export default CardImplementos 

