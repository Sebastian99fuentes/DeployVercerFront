import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ImplementosDto } from '../../Services/Models/Implemento/Implemento';
import { searchArea } from '../../Services/api';
import CardList from '../../Components/CardList/CardList';
import Hero from '../../Components/Hero/Hero';
import ListReservas from '../../Components/ListReservas/ListReservas';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';

interface Props {}
 
const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>("");
    const [searchResult, setSeachResult] = useState<ImplementosDto[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
    const [reservaValues, setreservaValues] = useState<string[]>([]);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }    
    const onReservaCreate = (e: any) =>{
      e.preventDefault();
       const updateReserva = [...reservaValues, e.target[0].value];
       setreservaValues(updateReserva);
    }
  
    const onClick = async (e : SyntheticEvent) => {
  
      const results = await searchArea();
  
     if(typeof results == "string"){
       setServerError(results);
     } else if(Array.isArray(results)){
  
      setSeachResult(results);
      console.log(searchResult);
     } 
  
    };
  
  
    const onReservaDelete =(e: any) => {
      e.preventDefault();
      const removed = reservaValues.filter((value) =>{
        return value !== e.target[0].value;
      });
      setreservaValues(removed);
    }


  return (
    <>
  
    <Search 
    onClick={onClick} 
    Search={search} 
    handleChange={handleChange} />
    
    <ListReservas 
    reservaValues={reservaValues}
    onReservaDelete={onReservaDelete}
    />
    <CardList 
    searchResults={searchResult}
     onReservaCreate={onReservaCreate} />

    {serverError && <h1>{serverError}</h1>}
  
  </>
  )
}

export default SearchPage