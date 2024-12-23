import { Link } from 'react-router-dom';
import logo2 from "./logo-reserva.svg";
import "./Navbar.css";
import { getUserId } from '../../Services/LocalStorage/LocalStorage';
import { useAuth } from '../../Services/Context/useAuth';

interface Props {}
const Navbar = (props: Props) => {
   const user =  getUserId();

   const {  logout, isLoggedIn } = useAuth();

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
            {user === '11111111-1111-1111-1111-111111111111' && (
            <div className="hidden font-bold lg:flex">
            <Link to="/Admin" className="text-black hover:text-darkBlue">
            Admin 
            </Link>
          </div>
          )}
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
        {isLoggedIn() ? (
             <button 
                   onClick={logout} 
                 className="px-8 py-3 font-bold rounded text-white bg-red-500 hover:opacity-70"
                 >
                Salir
            </button>
        ) : (
    // Mostrar opciones de "Regístrate" e "Iniciar Sesión" si el usuario no está logeado
            <>
               <div className="hover:text-darkBlue">
                <Link to="/Register">Regístrate</Link>
                       </div>
                       <a 
                             className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                         >
                           <Link to="/Login">Iniciar Sesión</Link>
                   </a>
              </>
           )}

          

        </div>
      </div>
    </nav>
  );
};
export default Navbar;