import React from 'react'
import {ImplementosDto } from '../../../Services/Models/Implemento/Implemento'

type Props = {

    implemento: ImplementosDto;
    onReservaDelete: (id: string) => void;
}

const DeleteButonImplemento = ({implemento, onReservaDelete}: Props) => {
  return <> <button
             onClick={() => onReservaDelete(implemento.id)} // Llama con el ID
                 className="block w-full py-4 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
                >
             Eliminar
            </button>
        </>
}

export default DeleteButonImplemento