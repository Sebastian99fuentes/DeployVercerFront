import axios from "axios";
import { CommentDto } from "../../Models/Comments/Comments";



export const ImplemetosGetAll = async () => {
    try {
        // Realiza la llamada GET utilizando axios.
        const response = await axios.get<CommentDto[]>(
            'http://localhost:5150/api/implementos/GetAll-implemento'
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
