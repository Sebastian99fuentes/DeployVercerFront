import React, { SyntheticEvent } from 'react'
import CardReservas from '../CardReservas/CardReservas';

interface Props  {

    reservaValues: string[];
    onReservaDelete:(e: SyntheticEvent) => void;
}

const ListReservas = ({reservaValues, onReservaDelete}: Props) => {
  return (
<section id="portfolio">
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        mis reservas
      </h2>
      <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <>
          {reservaValues.length > 0 ? (
            reservaValues.map((reservaValues) => {
              return (
                <CardReservas
                reservaValue={reservaValues}
                onReservaDelete={onReservaDelete}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
               Ninguna reserva
            </h3>
          )}
        </>
      </div>
    </section>

  )
}

export default ListReservas