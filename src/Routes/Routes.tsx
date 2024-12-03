import { createBrowserRouter } from "react-router"
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import ReservaPage from "../Pages/ReservaPage/ReservaPage"
import ImplementosPage from "../Pages/ImplementosPage/ImplementosPage"
import AreasPage from "../Pages/AreasPage/AreasPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import HorarioPage from "../Pages/HorarioPage/HorarioPage"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "search", element: <SearchPage />},
            {path: "Reserva/:ticker", element: <ReservaPage />},
            {path: "implementos", element: <ImplementosPage />},
            {path:"Horarios", element: <HorarioPage />},
            {path: "areas", element: <AreasPage />},
            {path:"Login", element: <LoginPage />},
            {path:"Register", element: <RegisterPage />},
        ],
    },
]);