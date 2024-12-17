import React, { SyntheticEvent } from 'react'
import { Area } from '../../../Services/Models/Area/Area';

import DeleteButonArea from '../DeleteButonArea/DeleteButonArea';
import ModificarButonArea from '../ModificarButonArea/ModifficarButonArea';

interface Props  {
   
    searchResults: Area;
     onReservaDelete:(id: string) => void;
}

const CardArea: React.FC<Props> = ({ searchResults, onReservaDelete }: Props): React.JSX.Element => {
    return (
        <div className="card">
            <div>
                <p>{searchResults.nombre}</p>
                <p>{searchResults.ubicacion}</p>
            </div>

            <div className="flex justify-center mt-5 space-x-3">

                <DeleteButonArea  searchResults={searchResults} onReservaDelete={onReservaDelete} />
                
                <ModificarButonArea  area={searchResults} />
                {/* <button className="block w-full py-4 text-white duration-200 border-2 rounded-lg bg-yellow-500 hover:text-yellow-500 hover:bg-white border-yellow-500">
                    Modificar
                </button> */}
            </div>
        </div>
    );
};


export default CardArea