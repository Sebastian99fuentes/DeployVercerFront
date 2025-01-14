import axios from "axios";

const httpClient = axios.create({
 
    baseURL: "https://deployrailwayapi-production.up.railway.app/api", // Define la URL base
    timeout: 5000, // Tiempo máximo de espera
    headers: {
        "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJnaXZlbl9uYW1lIjoiYWRtaW4iLCJ1c2VySWQiOiIxMTExMTExMS0xMTExLTExMTEtMTExMS0xMTExMTExMTExMTEiLCJuYmYiOjE3MzY4OTgxODAsImV4cCI6MTczNzUwMjk4MCwiaWF0IjoxNzM2ODk4MTgwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.Pjgf7KrGQzHMFl4LVuCyVAI1Orlyk6B9bESgU5Fn8zL1F2cDHTHLtT4pzQ1K2fPTYZfQ6WerhEP9dJEM1fe9Sw", // Token de autenticación
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