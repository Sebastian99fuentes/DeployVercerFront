import React from 'react'
import { ReservasImplementoUserDto } from '../../../Services/Models/ReservaImplementos/ReservaImplementos';
import { format } from 'date-fns';
import DeleteReserva from '../Delete/DeleteReserva';

interface Props {
  events: ReservasImplementoUserDto; // Usa el tipo correcto
  onReservaDelete: (id: string) => void;
}

const CardReservasImplementos = ({events,onReservaDelete}: Props) => {
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <p className="font-bold text-lg">{events.title}</p>
            <p className="text-sm text-gray-600">
                  Inicio: {format(new Date(events.start), 'dd/MM/yyyy HH:mm')}
              </p>
            <p className="text-sm text-gray-600">
                  Fin: {format(new Date(events.end), 'dd/MM/yyyy HH:mm')}
              </p>
            <DeleteReserva id={events.id} onReservaDelete={onReservaDelete} />
        </div>
    );
}

export default CardReservasImplementos