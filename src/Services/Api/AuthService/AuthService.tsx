import axios from "axios"
import { UserProfileToken } from "../../Models/Login/Logins";
import { handleError } from "../../../Helpers/ErrorHandler";
import { toast } from "react-toastify";


const api = "https://deployrailwayapi-production.up.railway.app/api/";

export const loginAPI = async (username: string, password: string) => {
    try{
        const data = await axios.post<UserProfileToken>(`${api}account/Login`,{
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

        const data = await axios.post<UserProfileToken>(`${api}account/register`,{
            username:email,
            password: username,
            email: password
        });
        return data;
   }catch (error){
        handleError(error);
   }
   
}