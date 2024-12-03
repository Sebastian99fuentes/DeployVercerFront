import axios from "axios"
import { UserProfileToken } from "../../Models/Login/Logins";
import { handleError } from "../../../Helpers/ErrorHandler";


const api = "http://localhost:5150/api"

export const loginAPI = async (username: string, password: string) => {
    try{
        const data = await axios.post<UserProfileToken>(api +"account/Login",{
            username:username,
            password: password
        });
        return data;
   }catch (error){
        handleError(error);
   }  
}


export const registerAPI = async (email:string ,username: string, password: string) => {
    try{
        const data = await axios.post<UserProfileToken>(api +"account/register",{
            username:username,
            password: password,
            email: email
        });
        return data;
   }catch (error){
        handleError(error);
   }
   
}