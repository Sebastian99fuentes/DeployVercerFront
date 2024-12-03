export interface HorarioDto {
    id: string; // Guid en C# se traduce a string
    dia: number; // int en C# se traduce a number
    hora?: number; // int? en C# se traduce a number opcional
    disponible: boolean; // bool en C# se traduce a boolean
    areaId?: string; // Guid? en C# se traduce a string opcional
    implementoId?: string; // Guid? en C# se traduce a string opcional
  
    // Este método se puede convertir en una función en TypeScript si es necesario.
    esHorarioParaArea?: () => boolean;
  }
  

  export interface CreateHorarioRequestDto {
    dia: number; // Día específico
    hora: number; // Hora específica (para áreas)
    esImplemento: boolean; // Flag para saber si es un implemento
  } 

  export interface UpdateHorarioRequestDto {
    disponible: boolean; // Indica si el horario está libre
    esImplemento: boolean; // Flag para saber si es un implemento
  }