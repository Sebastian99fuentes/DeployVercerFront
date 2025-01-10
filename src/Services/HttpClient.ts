import axios from "axios";

const httpClient = axios.create({

    baseURL: "http://localhost:5150/api", // Define la URL base
    timeout: 5000, // Tiempo máximo de espera
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"), // Token de autenticación
    }
});

// Manejo global de errores (opcional)
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Lógica global para manejar errores
        console.error("HTTP Error:", error);
        return Promise.reject(error);
    }
);

export default httpClient;