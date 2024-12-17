import React, { SyntheticEvent } from 'react'
import { Area } from '../../../Services/Models/Area/Area';

type Props = {
   
       searchResults: Area;
        onReservaDelete:(id: string) => void;
}

const DeleteButonArea = ({ searchResults, onReservaDelete }: Props) => {
  return <>
                 <button
                    onClick={() => onReservaDelete(searchResults.id)} // Llama con el ID
                    className="block w-full py-4 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
                >
                    Eliminar
                </button>
  </>

}

export default DeleteButonArea