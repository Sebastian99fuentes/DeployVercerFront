import { createBrowserRouter } from "react-router"
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import ImplementosPage from "../Pages/ImplementosPage/ImplementosPage"
import AreasPage from "../Pages/AreasPage/AreasPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import HorarioPage from "../Pages/HorarioPage/HorarioPage"
import CRUDAdminPage from "../Pages/CRUDAdminPage/CRUDAdminPage"
import HorarioImplementoPage from "../Pages/HorarioPage/HorarioImplementoPage"
import ProtectedRoute from "./ProtectedRoute"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
          { path: "", element: <HomePage /> },
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
          {
            path: "search",
            element: (
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            ),
          },
          {path: "implementos", element:   <ProtectedRoute>(<ImplementosPage />)   </ProtectedRoute>},
          {path: "Horarios/:id", element:   <ProtectedRoute>(<HorarioPage />)   </ProtectedRoute>},
          {path: "HorariosImp/:id", element:   <ProtectedRoute>(<HorarioImplementoPage />)   </ProtectedRoute>},
          {path: "areas", element:   <ProtectedRoute>(<AreasPage />)   </ProtectedRoute>},
          {path: "Admin", element:   <ProtectedRoute>(<CRUDAdminPage />)   </ProtectedRoute>},


        ]
        // path: "/",
        // element: <App />,
        // children: [
        //     {path: "", element: <HomePage />},
        //     {path: "search", element: <SearchPage />},
        // {path:"Horarios/:id", element: <HorarioPage />},
        // {path:"HorariosImp/:id", element: <HorarioImplementoPage />},
        // {path: "areas", element: <AreasPage />},
        // {path:"Admin", element: <CRUDAdminPage />},
        //     {path:"Login", element: <LoginPage />},
        //     {path:"Register", element: <RegisterPage />},
        //     
            
        // ],
    },
]);