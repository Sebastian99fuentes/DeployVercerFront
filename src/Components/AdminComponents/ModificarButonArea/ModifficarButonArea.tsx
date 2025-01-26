import React, { useState } from 'react'
import { Area } from '../../../Services/Models/Area/Area';
import Swal from 'sweetalert2';
import { AreaUpdate } from '../../../Services/Api/index';

type Props = {
       area: Area;
}


const ModificarButonArea = ({ area }: Props) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const openModal = () => {
        Swal.fire({
            title: `Modifica ${area.nombre}`,
            html:
                '<input id="nombre" class="swal2-input" placeholder="' + area.nombre + '">' +
                '<input id="descripcion" class="swal2-input" placeholder="' + area.descripcion + '">' +
                '<input id="ubicacion" class="swal2-input" placeholder="' + area.ubicacion + '">',
            focusConfirm: false,
            preConfirm: () => {
                const nombreElement = document.getElementById("nombre") as HTMLInputElement;
                const descripcionElement = document.getElementById("descripcion") as HTMLInputElement;
                const ubicacionElement = document.getElementById("ubicacion") as HTMLInputElement;
    
                if (nombreElement && descripcionElement && ubicacionElement) {
                    return [nombreElement.value, descripcionElement.value, ubicacionElement.value];
                } else {
                    Swal.showValidationMessage(`Por favor, completa los campos.`);
                    return false;  // Indicar que hubo un problema en la confirmación
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const [nombre, descripcion, ubicacion] = result.value;
                handleUpdate(nombre,descripcion,ubicacion)
                  Swal.fire('Modificado', 'El área ha sido modificada con éxito.', 'success');
            }
        });
    }
    
const handleUpdate = async (nombre: string, descripcion: string, ubicacion: string) => {
    setIsUpdating(true);
    try {
        await AreaUpdate(area.id, nombre, ubicacion, descripcion);
        Swal.fire('Actualización Exitosa', 'El área ha sido modificada.', 'success');
    } catch (error) {
        Swal.fire('Error', 'No se pudo actualizar el área. Intenta nuevamente.', 'error');
    } finally {
        setIsUpdating(false);
    }
};
    return<>
        <button 
    onClick={openModal}
    disabled={isUpdating}
    className={`block w-full py-4 text-white duration-200 border-2 rounded-lg bg-yellow-500 ${
        isUpdating ? 'cursor-not-allowed opacity-50' : 'hover:text-yellow-500 hover:bg-white border-yellow-500'
    }`}
>
    {isUpdating ? 'Actualizando...' : 'Modificar'}
</button>
      </>
    
  };
  
  export default ModificarButonArea;