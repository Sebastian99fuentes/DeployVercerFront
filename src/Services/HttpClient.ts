import axios from "axios";

const token = localStorage.getItem("token");

const httpClient = axios.create({
    baseURL: "https://deployrailwayapi-production.up.railway.app/api",
    timeout: 5000,
    headers: token ? { "Authorization": `Bearer ${token}` } : {},
});

// Manejo global de errores
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error("No autorizado, verifica el token");
        }
        return Promise.reject(error);
    }
);

export default httpClient;