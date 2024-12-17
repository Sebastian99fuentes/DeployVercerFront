
export const getUserId = (): string | null => {
    const user = localStorage.getItem("user"); // Leer desde localStorage
    if (user) {
        const parsedUser = JSON.parse(user); // Parsear el string JSON
        return parsedUser.userId; // Retornar el userId
    }
    return null; // Si no hay usuario, retornar null
};
