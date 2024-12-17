import axios from "axios";
import * as Area from "../../Models/Area/Area";
import httpClient from "../../HttpClient";



export const AreaCreate = async (nombre: string, ubicacion: string, descripcion: string): Promise<Area.CreateAreaRequestDto | string> => {
    try {

        const data = {
           nombre,
           ubicacion,
          descripcion
        }
            console.log(data)
        // Realiza la solicitud POST incluyendo el cuerpo con los datos
        const response = await httpClient.post<Area.CreateAreaRequestDto>("/area/create-area", data);
        console.log(response)
        // Devuelve los datos de la respuesta
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error en la API:", error.message);
            return error.message;
        } else {
            console.error("Error inesperado", error);
            return "Ha ocurrido un error inesperado";
        }
    }
};

export const AreasGet = async (): Promise<Area.Area[] | string> => {
    try{
        const response = await httpClient.get<Area.Area[]>("/area/GetAll-areas");
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

export const AreasGetById = async (id: string): Promise<Area.Area | string> => {
    try{
        const response = await httpClient.get<Area.Area>(`/area/GetById-areas/${id}`);
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


export const AreaDelete = async (id: string): Promise<string> => {
    try{
        const response = await httpClient.delete(`/area/Delete-areas/${id}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.error("Error en la API:", error.message);
            if(error.status==500){
                alert("No se puede eliminar el área porque tiene reservas asociadas.");
            }
            if(error.status ==401){
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




export const AreaUpdate = async (id: string, nombre: string, ubicacion: string, descripcion: string): Promise<Area.Area | string> => {
    try {

       // Crear un nuevo objeto con los datos actualizados
       const updatedArea = {
        nombre,
        ubicacion,
        descripcion
    };
    console.log(updatedArea)
        // Enviar la solicitud POST para actualizar los datos
        const response = await httpClient.put<Area.Area>(`/area/Update-areas/${id}`, updatedArea);
        
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error en la API:", error.message);
            return error.message;
        } else {
            console.error("Error inesperado", error);
            return "Ha ocurrido un error inesperado";
        }
    }
};



