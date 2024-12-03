import { CommentDto } from "../Comments/Comments";

export interface CreateImplementoRequestDto {
    nombreImple: string; // Nombre del implemento
    cantidad: number; // Cantidad del implemento
  } 

export interface ImplementoDto {
    id: string; // Guid en C# se traduce a string
    nombreImple: string; // Nombre del implemento
    cantidad: number; // Cantidad del implemento
    comments: CommentDto[]; // Lista de comentarios
}  

export interface ImplementosDto {
    id: string; // Guid en C# se traduce a string
    nombreImple: string; // Nombre del implemento
    cantidad: number; // Cantidad del implemento
}

export interface UpdateImpleCantidadDto {
    upDown: boolean; // Indica si se incrementa o decrementa la cantidad
}