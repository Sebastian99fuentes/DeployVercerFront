import axios from "axios";
import * as ReservaArea  from "../../Models/ReservaArea/Reserva";
import httpClient from "../../HttpClient";
import { getUserId } from "../../LocalStorage/LocalStorage";


export const ReservasAreaCreate= async (nombreArea: string, AreaId: string, Start: string, End: string): Promise<ReservaArea.CreateReservaAreaDto | string> => {
    try {
          var UserId =getUserId();
          
          console.log(UserId)
        const areaData = {
            AreaId,
            UserId,
            Title: nombreArea,
            Start,
            End,
        };
        // Llama a la API utilizando el httpClient

        console.log("esta es areaData",areaData)
        const response = await httpClient.post<ReservaArea.CreateReservaAreaDto>(`/reservaArea/Create-reservaArea`,areaData);
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


export const ReservasAreaAreasGet = async (id: string): Promise<ReservaArea.ReservasAreasDto[] | string> => {
    try{
        const response = await httpClient.get<ReservaArea.ReservasAreasDto[]>(`/reservaArea/all-reservaArea/${id}`);
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

export const ReservaAreasByUserGet = async (): Promise<ReservaArea.ReservasAreasUserDto[] | string> => {
    try{
        var UserId =getUserId();
        const response = await httpClient.get<ReservaArea.ReservasAreasUserDto[]>(`/reservaArea/all-reservaAreaUser/${UserId}`);
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

export const ReservaAreasGetById = async (id: string): Promise<ReservaArea.ReservaArea | string> => {
    try{
        const response = await httpClient.get<ReservaArea.ReservaArea>(`/reservaArea/GetById-reserva/${id}`);
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


export const ReservaAreasDelete = async (id: string): Promise<string> => {
    try{
        const response = await httpClient.delete(`/reservaArea/delete-reservaArea/${id}`);
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
