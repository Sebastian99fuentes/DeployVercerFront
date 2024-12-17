
import ListReservas from '../../Components/ListReservas/ListReservas';


interface Props {}
 
const SearchPage = (props: Props) => {


  return (
    <>
     <div className="flex flex-col min-h-screen">
     <ListReservas  />
     </div>
   
 
  </>
  )
}

export default SearchPage