import React, { SyntheticEvent, useState } from 'react'
import { ImplementosDto } from '../../../Services/Models/Implemento/Implemento';
import './CardImple.css';

import DeleteButonImplemento from '../DeleteButonImplemento/DeleteButonImplemento';
import ModificarButonImplemento from '../ModificarButonImplemento/ModificarButonImplemento';
interface Props  {
   
  searchResults: ImplementosDto;
  onReservaDelete:(id: string) => void;
  onReservaUpdate: (updatedImplemento: ImplementosDto) => void; // Nueva prop
}

const CardImple : React.FC<Props> = ({searchResults, onReservaDelete, onReservaUpdate }: Props)   
:React.JSX.Element=> {

  return (
    <div className="card">
      {/* Title */}
      <div>   
          {searchResults.nombreImple}
      </div>
      <div className="flex justify-center mt-5 space-x-3">
 
     <DeleteButonImplemento   implemento={searchResults} onReservaDelete={onReservaDelete}  />

      <ModificarButonImplemento  implemento={searchResults} onReservaUpdate={onReservaUpdate} />
</div>


    </div>
  );
};
export default CardImple