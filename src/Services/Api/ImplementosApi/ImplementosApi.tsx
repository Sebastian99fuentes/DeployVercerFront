import axios from "axios";
import { ImplementosDto } from "../../Models/Implemento/Implemento";
import { promises } from "dns";



export const ImplemetosGet = async ():  Promise<ImplementosDto[]>  => {
    try {
        // Realiza la llamada GET utilizando axios.
        const response = await axios.get<ImplementosDto[]>(
            'http://localhost:5150/api/implementos/GetAll-implemento'
        );

        return response.data; // Retorna directamente el array de áreas.
    } catch (error) {
        console.error("Error fetching areas:", error);
        return []; // Devuelve un arreglo vacío si ocurre un error.
    }
}; 
