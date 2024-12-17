import axios from "axios";

import * as ReservaImple  from "../../Models/ReservaImplementos/ReservaImplementos";
import httpClient from "../../HttpClient";
import { getUserId } from "../../LocalStorage/LocalStorage";


export const ReservasImplementoCreate= async (nombreImple: string, ImplementoId: string, Start: string, End: string): Promise<ReservaImple.CreateReservaImplementoDto | string> => {
   
    try {
          var UserId =getUserId()
        const ImplementoData = {
            ImplementoId,
            UserId,
            Title: nombreImple,
            Start,
            End,
        };
        // Llama a la API utilizando el httpClient
        const response = await httpClient.post<ReservaImple.CreateReservaImplementoDto>(`/reservaImplemento/Create-reservaImplemento`,ImplementoData);
        return response.data; // Retorna directamente los datos
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error en la API:", error.message);
            return error.message; // Devuelve el mensaje de error de Axios
        } else {
            console.error("Error inesperado:", error);
            return "Ha ocurrido un error inesperado.";
        }
    }
};


export const ReservasImplementoGet = async (id: string): Promise<ReservaImple.ReservasImplementoDto[] | string> => {
    try{
        const response = await httpClient.get<ReservaImple.ReservasImplementoDto[]>(`/reservaImplemento/all-reservaImplemento/${id}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Error en la API:", error.message);
            return error.message;
        }else{
                console.error("Error inesperado", error);
                return "Ha ocurrido un error inesperado";
        }
    }
}

export const ReservaImplementoByUserGet = async (): Promise<ReservaImple.ReservasImplementoUserDto[] | string> => {
    try{
        var UserId =getUserId();
        const response = await httpClient.get<ReservaImple.ReservasImplementoUserDto[]>(`reservaImplemento/all-reservaImplementoUser/${UserId}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Error en la API:", error.message);
            return error.message;
        }else{
                console.error("Error inesperado", error);
                return "Ha ocurrido un error inesperado";
        }
    }
} 

export const ReservaImplementoGetById = async (id: string): Promise<ReservaImple.ReservaImplemento | string> => {
    try{
        const response = await httpClient.get<ReservaImple.ReservaImplemento>(`/reservaArea/GetById-reservaImplemento/${id}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Error en la API:", error.message);
            return error.message;
        }else{
                console.error("Error inesperado", error);
                return "Ha ocurrido un error inesperado";
        }
    }
}


export const ReservaImplementoDelete = async (id: string): Promise<string> => {
    try{
        const response = await httpClient.delete(`/reservaImplemento/delete-reservaImplemento/${id}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Error en la API:", error.message);
            if(error.status===500){
                alert("No se puede eliminar el área porque tiene reservas asociadas.");
            }
            if(error.status ===401){
                alert("No se puede eliminar el área ");
            }
            return error.message;
            
        }
        else{
                console.error("Error inesperado", error);
                return "Ha ocurrido un error inesperado";
        }
    }
}
