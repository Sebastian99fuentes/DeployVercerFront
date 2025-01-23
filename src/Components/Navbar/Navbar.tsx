import { Link } from 'react-router-dom';
import logo2 from "./logo-reserva.svg";
import "./Navbar.css";
import { getUserId } from '../../Services/LocalStorage/LocalStorage';
import { useAuth } from '../../Services/Context/useAuth';
import { useState } from 'react';

interface Props {}

const Navbar = (props: Props) => {
   const user = getUserId();
   const { logout, isLoggedIn } = useAuth();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Función para manejar la apertura y cierre del menú
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo2} alt="" className="logo-img" />
          </Link>
          
          {/* Menu en desktop */}
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Mis Reservas
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/Areas" className="text-black hover:text-darkBlue">
            Reservar Espacios Físicos
            </Link>
          </div>
          <div className="hidden font-bold lg:flex">
            <Link to="/Implementos" className="text-black hover:text-darkBlue">
            Reservar  Implementos Deportivos
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

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Menú en pantallas pequeñas */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg`}>
          <div className="flex flex-col items-center">
            <Link to="/search" className="py-2 px-4 text-black hover:text-darkBlue">Mis Reservas</Link>
            <Link to="/Areas" className="py-2 px-4 text-black hover:text-darkBlue"> Reservar Espacios Físicos</Link>
            <Link to="/Implementos" className="py-2 px-4 text-black hover:text-darkBlue"> Reservar  Implementos Deportivos</Link>
            {user === '11111111-1111-1111-1111-111111111111' && (
              <Link to="/Admin" className="py-2 px-4 text-black hover:text-darkBlue">Admin</Link>
            )}
            <div className="py-2 px-4">
              {isLoggedIn() ? (
                <button 
                  onClick={logout} 
                  className="px-8 py-3 font-bold rounded text-white bg-red-500 hover:opacity-70">
                  Salir
                </button>
              ) : (
                <>
                  <Link to="/Register" className="block py-2 text-black hover:text-darkBlue">Regístrate</Link>
                  <Link to="/Login" className="block py-2 text-black hover:text-darkBlue">Iniciar Sesión</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden lg:flex items-center space-x-6 text-back">
          {isLoggedIn() ? (
            <button 
              onClick={logout} 
              className="px-8 py-3 font-bold rounded text-white bg-red-500 hover:opacity-70"
            >
              Salir
            </button>
          ) : (
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
