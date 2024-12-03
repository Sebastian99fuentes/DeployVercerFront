import axios from "axios";
import { ImplementosDto } from "../../Models/Implemento/Implemento";
import { Area, Areas } from "../../Models/Area/Area";



export const GetAllAreas = async () => {
    try {
        // Realiza la llamada GET utilizando axios.
        const response = await axios.get<Area[]>(
            'http://localhost:5150/api/area/GetAll-areas'
        );

        return response.data; // Retorna directamente el array de áreas.
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message:", error.message);
            return error.message; // Manejo de errores de Axios.
        } else {
            console.log("Unexpected error:", error);
            return "An unexpected error has occurred.";
        }
    }
}; 

export const getAreas2 = async (): Promise<Area[]> => {
    try {
        const response = await axios.get<Area[]>('http://localhost:5150/api/area/GetAll-areas');
        return response.data;
    } catch (error) {
        console.error("Error fetching areas:", error);
        return []; // Devuelve un arreglo vacío si ocurre un error.
    }
};
