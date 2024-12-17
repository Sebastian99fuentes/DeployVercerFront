import {
  DateSelectArg,
  EventContentArg,
} from '@fullcalendar/core'
import React, { useEffect, useRef, useState } from 'react';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2';
import { ReservasAreaAreasGet, ReservasAreaCreate } from '../../../Services/Api/ReservasAreaApi/ReservasAreaApi';
import { ReservasAreasDto } from '../../../Services/Models/ReservaArea/Reserva';
import './Horario.css';
import FullCalendar from '@fullcalendar/react';
import { getUserId } from '../../../Services/LocalStorage/LocalStorage';

interface Props {
  Id: string;
  nombreArea: string;
}

const Horario: React.FC<Props> = ({ Id, nombreArea }: Props): React.JSX.Element => {
  const calendarRef = useRef<FullCalendar | null>(null); // Referencia al calendario
  const [events, setEvents] = useState<ReservasAreasDto[]>([]); // Estado para eventos
 
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await ReservasAreaAreasGet(Id);
        if (typeof response === 'string') {
          Swal.fire('Error', `No se pudieron cargar los eventos: ${response}`, 'error');
        } else if (Array.isArray(response)) {
          setEvents(response); // Actualiza los eventos
        }
      } catch (error) {
        console.error('Error al cargar los eventos:', error);
        Swal.fire('Error', 'No se pudo cargar los eventos.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar;
   var AppUserId =getUserId();
            
            console.log("esta es id user",AppUserId)
    Swal.fire({
      title: 'Confirmar Reserva',
      text: '¿Estás seguro de reservar este horario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, reservar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const isReservationConfirmed = await handleConfirmReservation(
          selectInfo.startStr,
          selectInfo.endStr
        );
  
        if (isReservationConfirmed) {
          calendarApi.addEvent({
            id: String(new Date().getTime()),
            title: 'Reserva Confirmada',
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay,
          });
        }
      }
      calendarApi.unselect(); // Clear date selection after handling
    });
  };

  const handleConfirmReservation = async (
    startStr: string,
    endStr: string
  ): Promise<boolean> => {
    try {
      const response = await ReservasAreaCreate(nombreArea, Id, startStr, endStr);
  
      if (typeof response === 'string') {
        Swal.fire('Error', 'Has alcanzado el límite de reservas por usuario (3).', 'error');
        return false; // Reserva no confirmada
      } else {
        Swal.fire('Éxito', 'Reserva confirmada con éxito.', 'success');
        return true; // Reserva confirmada
      }
    } catch (error) {
      console.error('Error al confirmar la reserva:', error);
      Swal.fire('Error', 'No se pudo completar la reserva. Intenta nuevamente.', 'error');
      return false; // Reserva no confirmada
    }
  };
  

  const handleSelectAllow = (selectInfo: { start: Date }) => {
    const now = new Date();
    return selectInfo.start >= now; // Permitir solo fechas futuras
  };

  const renderEventContent = (eventContent: EventContentArg) => (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );

  if (loading) {
    return <p>Cargando eventos...</p>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          eventContent={renderEventContent}
          slotDuration="01:00:00"
          slotMinTime="08:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          height="auto"
          selectable={true}
          select={handleDateSelect}
          initialView="timeGridWeek"
          editable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          locale="es"
          selectAllow={handleSelectAllow}
          validRange={{
            start: new Date().toISOString().split('T')[0],
          }}
          
          initialEvents={events} // Renderizar eventos cargados
        />
      </div>
    </div>
  );
};

export default Horario;
