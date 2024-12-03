import React, { SyntheticEvent } from 'react'

interface Props {

    onReservaDelete: (e: SyntheticEvent) => void;
    reservaValue: string;
}

const DeleteReserva = ({onReservaDelete, reservaValue}: Props) => {
  return (
    <div>
        <form onSubmit={onReservaDelete}>
            <input hidden={true} value={reservaValue} />
            <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
        </form>

    </div>
  )
}

export default DeleteReserva