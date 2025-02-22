import { createBrowserRouter } from "react-router"
import App from "../App"
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import ImplementosPage from "../Pages/ImplementosPage/ImplementosPage"
import AreasPage from "../Pages/AreasPage/AreasPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import CRUDAdminPage from "../Pages/CRUDAdminPage/CRUDAdminPage"
import HorarioImplementoPage from "../Pages/HorarioPage/HorarioImplementoPage"
import ProtectedRoute from "./ProtectedRoute"
import HorarioAreaPage from "../Pages/HorarioPage/HorarioAreaPage"

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
          {path: "implementos", element:(   <ProtectedRoute><ImplementosPage />  </ProtectedRoute>),},
          {path: "Horarios/:id", element:(   <ProtectedRoute><HorarioAreaPage /> </ProtectedRoute>),},
          {path: "HorariosImp/:id", element:(   <ProtectedRoute><HorarioImplementoPage />  </ProtectedRoute>),},
          {path: "areas", element:(   <ProtectedRoute><AreasPage />  </ProtectedRoute>),},
          {path: "Admin", element: (  <ProtectedRoute><CRUDAdminPage />  </ProtectedRoute>), },


        ]
    },
]);