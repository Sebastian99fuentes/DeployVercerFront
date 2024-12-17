export interface ReservaImplemento {
    id: string;
    implementoId: string;
    AppUserId: string;
    Title: string;
    Start: string;
    End: string;
  } 
  
  export interface CreateReservaImplementoDto {
    implementoId: string;
    AppUserId: string;
    Title: string;
    Start: string;
    End: string;
  } 
  
  export interface ReservasImplementoDto {
    Id: string;
    Title: string;
    Start: string;
    End: string;
    AllDay: boolean;
  }
  
  export interface ReservasImplementoUserDto {
    UserId: string;
    id: string;
    title: string;
    start: string;
    end: string;
  } 
  