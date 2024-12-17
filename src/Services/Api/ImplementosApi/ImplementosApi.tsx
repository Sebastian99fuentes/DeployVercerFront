import axios from "axios";

import * as Implementos from "../../Models/Implemento/Implemento";

import httpClient from "../../HttpClient";

export const ImplemetosCreate= async (nombreImple: string, cantidad: Number): Promise<Implementos.CreateImplementoRequestDto | string> => {
    try {

        const areaData = {
            nombreImple,
            cantidad
        };

        // Llama a la API utilizando el httpClient
        const response = await httpClient.post<Implementos.CreateImplementoRequestDto>("/implementos/create-implemento",areaData);
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

export const ImplemetosGet = async (): Promise<Implementos.ImplementosDto[] | string> => {
    try {
        // Llama a la API utilizando el httpClient
        const response = await httpClient.get<Implementos.ImplementosDto[]>("/implementos/GetAll-implemento");
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

export const ImplemetosGetById = async (id: string): Promise<Implementos.ImplementosDto | string> => {
    try {
        // Llama a la API utilizando el httpClient
        const response = await httpClient.get<Implementos.ImplementosDto>(`/implementos/ById-implemento/${id}`);
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

export const ImplemetosDelete = async (id: string): Promise<string> => {
    try {
        // Llama a la API utilizando el httpClient
        const response = await httpClient.delete(`/implementos/Delete-implemento/${id}`);
        return response.data; // Retorna directamente los datos
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error en la API:", error.message);
            alert("No se puede eliminar el área porque tiene reservas asociadas.");
            return error.message; // Devuelve el mensaje de error de Axios
        } else {
            console.error("Error inesperado:", error);
            return "Ha ocurrido un error inesperado.";
        }
    }
};

export const ImplemetosUpdate = async (id: string, nombreImple: string, cantidad: number): Promise<Implementos.ImplementosDto | string> => {

    try {
       const updatedImplemento = {
        nombreImple,
        cantidad
    };

        // Enviar la solicitud POST para actualizar los datos
        const response = await httpClient.put<Implementos.ImplementosDto>(
            `/implementos/Update-implemento/${id}`,
            updatedImplemento
        );
        return  JSON.stringify(response.data, null, 2); // Devuelve el objeto actualizado
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error en la API:", error.message);
            if (error.response?.status === 500) {
                alert("No se puede actualizar el implemento porque tiene restricciones.");
            }
            return error.message; // Devuelve el error como string
        } else {
            console.error("Error inesperado", error);
            return "Ha ocurrido un error inesperado";
        }
    }
};


