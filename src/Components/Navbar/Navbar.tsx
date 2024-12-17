import { Link } from 'react-router-dom';
import logo2 from "./logo-reserva.svg";
import "./Navbar.css";
import { getUserId } from '../../Services/LocalStorage/LocalStorage';

interface Props {}
const Navbar = (props: Props) => {
   const user =  getUserId();
   console.log("eeste es el user", user)
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
          <img src={logo2} alt="" className="logo-img" />
          </Link>
        
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Mis Reservas
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/Areas" className="text-black hover:text-darkBlue">
              Areas Deportivas
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/Implementos" className="text-black hover:text-darkBlue">
              Implementos 
            </Link>
          </div>
            {user === '1' && (
            <div className="hidden font-bold lg:flex">
            <Link to="/Admin" className="text-black hover:text-darkBlue">
            Admin 
            </Link>
          </div>
          )}
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">
            <Link to="/Register">
              Registrate
            </Link>
          
            </div>
          <a
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
             <Link to="/Login">
             Iniciar Sesion 
            </Link>
          
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;