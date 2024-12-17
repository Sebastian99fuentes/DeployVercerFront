import React, { SyntheticEvent } from 'react'

import { Area } from '../../Services/Models/Area/Area';
import AddReserva from '../Reserva/AddReserva/AddReserva';
import { ImplementosDto } from '../../Services/Models/Implemento/Implemento';
import { Link } from 'react-router-dom';

interface Props  {

  id: string;

  searchResults: ImplementosDto; 

onReservaCreate: (e:SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({id, searchResults,onReservaCreate}: Props) 

:React.JSX.Element => {
  return <div
  className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
  key={id}
  id={id}
    >
   
    <div className='details'>
    <Link to={`/rerserva/${searchResults.id}`} className="font-bold text-center text-veryDarkViolet md:text-left">
    {searchResults.nombreImple}
    </Link>
    <p className="text-veryDarkBlue">{searchResults.cantidad}</p>
    </div>
    <AddReserva onReservaCreate={onReservaCreate} nombre={searchResults.nombreImple} />
  </div>
}; 

export default Card ;