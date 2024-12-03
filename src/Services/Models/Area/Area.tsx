import { CommentDto } from "../Comments/Comments";

export interface Area {
    id: string;
    nombre: string;
    ubicacion: string;
    descripcion: string;
} 

export interface CreateAreaRequestDto {
    nombre: string;
    ubicacion: string;
    descripcion: string;
} 


export interface Areas {
    id: string;
    nombre: string;
    ubicacion: string;
    descripcion: string;
    comments: CommentDto[]; // Lista de comentarios
} 