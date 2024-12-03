import { HorarioDto } from "../Horario/Horario";



export interface CreateReservaRequestDto {
    userId: string; // Guid en C# se traduce a string en TypeScript
    horarioId: string; // Guid en C# se traduce a string en TypeScript
  
} 

export interface ReservaDto {
  id: string; // Guid en C# se traduce a string
  horarios: HorarioDto[]; // Lista de horarios
}