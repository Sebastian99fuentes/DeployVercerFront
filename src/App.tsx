
import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { UserProvider } from './Services/Context/useAuth';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';


function App() {


  return<>
    <UserProvider>
    
    <Navbar />
    <Outlet />
    <ToastContainer />
    <Footer  />
    </UserProvider>
    </>

}

export default App;
