
import axios from "axios";
import { ImplementoDto, ImplementosDto } from "./Models/Implemento/Implemento";
import { wait } from "@testing-library/user-event/dist/utils";
import { Area } from "./Models/Area/Area";


export const searchArea = async () => {
    try {
        // Realiza la llamada GET utilizando axios.
        const response = await axios.get<ImplementosDto[]>(
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

export const getAllAreas = async (): Promise<Area[]> => {
    try {
        const response = await axios.get<Area[]>(
            'http://localhost:5150/api/area/GetAll-areas'
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message:", error.message);
        } else {
            console.log("Unexpected error:", error);
        }
        return []; // Devuelve un arreglo vacío en caso de error.
    }
};

export const getAllAreas2 = async () => {
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



export const getAllArea = async (query: string) => {

    try{
        const response = await axios.get<Area[]>(
             `http://localhost:5150/api/area/GetById-${query}`
        );
        return response.data;
    }catch (error){
        if (axios.isAxiosError(error)) {
            console.log("Error message:", error.message);
            return error.message; // Manejo de errores de Axios.
        } else {
            console.log("Unexpected error:", error);
            return "An unexpected error has occurred.";
        }
    }
};
