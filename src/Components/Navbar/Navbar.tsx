import { Link } from 'react-router-dom';
import logo2 from "./logo-reserva.svg";
import "./Navbar.css";

interface Props {}
const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
          <img src={logo2} alt="" className="logo-img" />
          </Link>
        
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Dashboard
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
          <div className="hidden font-bold lg:flex">
            <Link to="/Horarios" className="text-black hover:text-darkBlue">
              Horarios 
            </Link>
          </div>
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