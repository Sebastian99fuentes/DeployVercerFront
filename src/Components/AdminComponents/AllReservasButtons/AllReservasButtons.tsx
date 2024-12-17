import React from 'react'
import { Link } from 'react-router-dom'
import './AllReservasButtons.css'
type Props = {}

const AllReservasButtons = (props: Props) => {
  return <>
   <div className="cuerpoall">
   <div className="cardCrud">
   <div className="button-group">
   <Link  
          to={`/Horarios/All`}
          state={{ name: 'Areas' }}
        >
        <button > Área</button>
    </Link>
    <Link  
          to={`/Horarios/All`}
          state={{ name: 'Implementos' }}
        >
        <button > Implemento</button>         
    </Link>
      </div>
   </div>
   </div>
  


</>
   
}
export default AllReservasButtons