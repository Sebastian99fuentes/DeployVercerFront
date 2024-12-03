import React, { SyntheticEvent } from 'react'

type Props = {
    onReservaCreate: (e: SyntheticEvent) => void;
    nombre: string

}

const AddReserva = ({onReservaCreate, nombre}: Props) => {
  return (

    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"> 
  <form onSubmit={onReservaCreate}>
        <input readOnly = {true} hidden={true} value={nombre}/> 
        <button
          type="submit"
          className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
        >
          Agregar
        </button>
  </form>
  </div>
  )
}

export default AddReserva