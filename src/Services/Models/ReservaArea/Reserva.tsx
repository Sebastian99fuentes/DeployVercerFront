

export interface ReservaArea {
  id: string;
  AreaId: string;
  AppUserId: string;
  Title: string;
  Start: string;
  End: string;
} 

export interface CreateReservaAreaDto {
  AreaId: string;
  AppUserId: string;
  Title: string;
  Start: string;
  End: string;
} 

export interface ReservasAreasDto {
  Id: string;
  Title: string;
  Start: string;
  End: string;
  AllDay: boolean;
}

export interface ReservasAreasUserDto {
  id: string;
  userId: string;
  title: string;
  start: string;
  end: string;
} 
