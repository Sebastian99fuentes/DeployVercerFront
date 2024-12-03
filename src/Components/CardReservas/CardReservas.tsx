import React, { SyntheticEvent } from 'react'
import DeleteReserva from '../Delete/DeleteReserva';
import { Link } from 'react-router-dom';

interface Props  {
    reservaValue: string;
    onReservaDelete:(e: SyntheticEvent)=> void;
}

const CardReservas = ({reservaValue, onReservaDelete}: Props) => {
  return (
<div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
<Link  to={`/reserva/${reservaValue}`}className="pt-6 text-xl font-bold">{reservaValue}</Link>
<DeleteReserva
  onReservaDelete={onReservaDelete}
  reservaValue={reservaValue}
/>
</div>
  )
}

export default CardReservas