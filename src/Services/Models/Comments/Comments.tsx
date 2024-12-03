export interface CommentDto {
    id: string; // Guid en C# se mapea como string en TypeScript
    comentario: string; // string en C#
    createdOn: string; // DateTime se mapea como string en formato ISO o Date
    areaId?: string; // Propiedad opcional (Guid?)
    implementoId?: string; // Propiedad opcional (Guid?)
}

export interface Comment {
    
    comentario: string; // string en C# 
}