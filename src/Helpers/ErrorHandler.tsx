import axios from "axios";
import { toast } from "react-toastify"; // Asegúrate de que `react-toastify` esté importado en tu proyecto.

export const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        const err = error.response;

        if (err && err.data) {
            if (Array.isArray(err.data.errors)) {
                // Manejo de errores si es un array de errores
                for (let val of err.data.errors) {
                    toast.warning(val.description); // Suponiendo que `description` es la propiedad que deseas mostrar
                }
            } else if (typeof err.data.errors === 'object') {
                // Manejo de errores si es un objeto con propiedades
                for (let e in err.data.errors) {
                    toast.warning(err.data.errors[e][0]); // Suponiendo que la descripción está en la primera posición del array
                }
            } else {
                // Muestra el mensaje si es otro tipo de error en `err.data`
                toast.warning(err.data);
            }
        } else if (err && err.status === 401) {
            // Manejo específico para errores 401 (sin autorización)
            toast.warning("Por favor inicia sesión.");
            window.history.pushState({}, "loginPage", "/login");
        } else {
            // Manejo de otros errores inesperados
            toast.warning("Error desconocido. Inténtalo más tarde.");
        }
    } else {
        // Manejo de errores que no son de Axios
        toast.error("Ha ocurrido un error inesperado. Inténtalo más tarde.");
    }
};
