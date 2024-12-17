import React, { SyntheticEvent } from 'react'
import { ReservasAreasUserDto } from '../../../Services/Models/ReservaArea/Reserva';
interface Props {
  id: string;
  onReservaDelete: (id: string) => void;
}

const DeleteReserva = ({ id, onReservaDelete }: Props) => {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onReservaDelete(id);
  };

  return (
      <button
          onClick={handleDelete}
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
      >
          Eliminar
      </button>
  );
};

export default DeleteReserva;
