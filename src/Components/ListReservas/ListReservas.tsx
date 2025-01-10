import  {  useEffect, useState } from 'react'
import CardReservas from './ReservasUserArea/CardReservas';
import { ReservasAreasUserDto } from '../../Services/Models/ReservaArea/Reserva';
import Swal from 'sweetalert2';
import { ReservaAreasByUserGet, ReservaAreasDelete } from '../../Services/Api/ReservasAreaApi/ReservasAreaApi';

import {  ReservasImplementoUserDto } from '../../Services/Models/ReservaImplementos/ReservaImplementos';
import { ReservaImplementoByUserGet, ReservaImplementoDelete } from '../../Services/Api/ReservasImplementosApi/ReservasImplementosApi';
import CardReservasImplementos from './ReservasUserImplementos/CardReservasImplementos';
import Spinners from '../Spinners/Spinners';


const ListReservas = () => {
    const [reservaValues, setReservaValues] = useState<ReservasAreasUserDto[]>([]); // Estado para reservas
    const [reserImplevaValues, setreserImplevaValues] = useState<ReservasImplementoUserDto[]>([]); // Estado para reservas
    const [serverError, setServerError] = useState<string | null>(null); // Estado para el errors
    const [loading, setLoading] = useState<boolean>(true); // Estado de carga

    useEffect(() => {
        const fetchEvents = async () => {

            try {
                const response = await ReservaAreasByUserGet();
                console.log("Respuesta del servidor:", response);

                if (typeof response === 'string') {
                    // Swal.fire('Error', `No se pudieron cargar las reservas: ${response}`, 'error');
                    setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
                } else if (Array.isArray(response)) {
                    setReservaValues(response); // Actualiza las reservas
                }
            } catch (error) {
                console.error('Error al cargar las reservas:', error);
                // Swal.fire('Error', 'No se pudo cargar las reservas.', 'error');
                setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
            } 
            try{
              const response = await ReservaImplementoByUserGet();
              console.log("Respuesta del servidor:", response);
              if (typeof response === 'string') {
                // Swal.fire('Error', `No se pudieron cargar las reservas: ${response}`, 'error');
            } else if (Array.isArray(response)) {
              setreserImplevaValues(response); // Actualiza las reservas
            }
            }catch(error){
              console.error('Error al cargar las reservas:', error);
            //   Swal.fire('Error', 'No se pudo cargar las reservas.', 'error');
              setServerError("Error al conectar con el servidor. Inténtalo más tarde.");
            }
            finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const onReservaDelete = async (id: string) => {

          const result = await Swal.fire({
              title: '¿Estás seguro?',
              text: "No podrás revertir esta acción.",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sí, eliminar',
              cancelButtonText: 'Cancelar',
          });
          if (result.isConfirmed) {
            try {

                const result = await ReservaAreasDelete(id);
                console.log("result es",result)
                if (result==="") {
                    Swal.fire('Éxito', `Reserva eliminada`, 'success');
                    const updatedReservas = reservaValues.filter((reserva) => reserva.id !== id);
                    console.log("updatedReservas es",updatedReservas)
                    setReservaValues(updatedReservas);
                } else {
                    Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error');
                }
            } catch (error) {
                console.error('Error al eliminar la reserva:', error);
                Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error');
            }

          }
    
    };


    const onReservaDeleteImple = async (id: string) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esta acción.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        });
        if (result.isConfirmed) { 
            try {
                const result = await ReservaImplementoDelete(id);
                console.log("result es",result)
                if (result==="") {
                    Swal.fire('Éxito', `Reserva eliminada: ${result}`, 'success');
                    const updatedReservas = reserImplevaValues.filter((reserva) => reserva.id !== id);
                    console.log("updatedReservas es",updatedReservas)
                    setreserImplevaValues(updatedReservas);
                } else {
                    Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error');
                }
            } catch (error) {
                console.error('Error al eliminar la reserva:', error);
                Swal.fire('Error', 'No se pudo eliminar la reserva.', 'error');
            }
        }

};

    return (<>
      <div className="flex flex-col min-h-screen">

      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
         Áreas Reservadas
    </h2>
    <div className="flex flex-wrap justify-center gap-6 p-4">
        {loading ? (
             <div className="flex flex-wrap justify-center gap-6 p-4">
             <Spinners />
             <p className="text-center">Cargando reservas...</p>
           </div>
        ) : reservaValues.length > 0 ? (
            reservaValues.map((reserva) => (
                <CardReservas
                    key={reserva.id}
                    events={reserva}
                    onReservaDelete={onReservaDelete}
                />
            ))
        ) : (
            <div className="flex flex-wrap justify-center gap-6 p-4">
            {serverError ? (
              <h1 className="text-red-500 text-xl">{serverError}</h1>
            ) : (
              <h1>  Ninguna reserva disponibles necesitas hacer  una reserva</h1>
            )}
          </div>
        )}
    </div>

    <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
         Implementos Reservados
    </h2>
    <div className="flex flex-wrap justify-center gap-6 p-4">
    {loading ? (
          // Mostrar spinner mientras está cargando
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Spinners />
            <p className="text-center">Cargando reservas...</p>
          </div>
           
        ) : reserImplevaValues.length > 0 ? (
            reserImplevaValues.map((reservas) => (
                
                <CardReservasImplementos
                    key={reservas.id}
                    events={reservas}
                    onReservaDelete={onReservaDeleteImple}
                />
            ))
        ) : (
            <div className="flex flex-wrap justify-center gap-6 p-4">
            {serverError ? (
              <h1 className="text-red-500 text-xl">{serverError}</h1>
            ) : (
              <h1>  Ninguna reserva disponibles necesitas hacer  una reserva</h1>
            )}
          </div>
        )}
    </div>
      </div>    
    </>
    );
};

export default ListReservas;
