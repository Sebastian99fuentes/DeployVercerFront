import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card';
import { Area } from '../../Services/Models/Area/Area';
import {v4 as uuidv4} from "uuid";
import { ImplementoDto, ImplementosDto } from '../../Services/Models/Implemento/Implemento';

interface Props  {
  searchResults : ImplementosDto[];
  onReservaCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResults, onReservaCreate}: Props) 
:JSX.Element  => {
  return <>
       {searchResults.length > 0 ?(

        searchResults.map((result) => {
          return <Card 
          id={ result.nombreImple}
          key={uuidv4()} 
          searchResults={result}
          onReservaCreate={onReservaCreate}/>
        })
       ):(
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">No hay nada</p>
       )}</>;
  
};

export default CardList;