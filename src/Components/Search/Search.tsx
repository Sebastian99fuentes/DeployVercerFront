import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'

type Props = {
  onClick: (e: SyntheticEvent) => void; 
  Search: (string | undefined);
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void

};

const Search : React.FC<Props> = ({onClick, Search, handleChange}: Props):JSX.Element=> {

  return (
    <div>
        <input value={Search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e) }>x</button>
    </div>
  )
}

export default Search