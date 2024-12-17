import React, { useState } from 'react';
import { ImplementosDto } from '../../../Services/Models/Implemento/Implemento';
import Swal from 'sweetalert2';
import { ImplemetosUpdate } from '../../../Services/Api/index';


type Props = {
    implemento: ImplementosDto;
    onReservaUpdate: (updatedImplemento: ImplementosDto) => void; // Nueva prop
};

const ModificarButonImplemento = ({ implemento,onReservaUpdate }: Props) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const openModal = () => {
        Swal.fire({
            title: `Modifica ${implemento.nombreImple}`,
            html: `
                <input id="nombreImple" class="swal2-input" placeholder="${implemento.nombreImple}">
                <input id="cantidad" type="number" class="swal2-input" placeholder="${implemento.cantidad}" min="1">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const nombreElement = document.getElementById("nombreImple") as HTMLInputElement;
                const cantidadElement = document.getElementById("cantidad") as HTMLInputElement;

                if (!nombreElement || !cantidadElement) {
                    Swal.showValidationMessage(`Por favor, completa los campos.`);
                    return false;
                }

                const nombreImple = nombreElement.value.trim();
                const cantidad = parseInt(cantidadElement.value.trim(), 10);

                if (!nombreImple) {
                    Swal.showValidationMessage(`El nombre no puede estar vacío.`);
                    return false;
                }

                if (isNaN(cantidad) || cantidad <= 0) {
                    Swal.showValidationMessage(`La cantidad debe ser un número mayor a cero.`);
                    return false;
                }

                return [nombreImple, cantidad];
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const [nombreImple, cantidad] = result.value as [string, number];
                handleUpdate(nombreImple, cantidad);
            }
        });
    };

    const handleUpdate = async (nombreImple: string, cantidad: number) => {
        setIsUpdating(true);
        try {
            const response = await ImplemetosUpdate(implemento.id, nombreImple, cantidad);
            // onReservaUpdate(response); // Pasar el objeto correcto
             Swal.fire('Actualización Exitosa', 'El implemento ha sido modificada.', 'success');
        } catch (error) {
            Swal.fire('Error', 'No se pudo actualizar el implemento. Intenta nuevamente.', 'error');
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <>
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
    );
};

export default ModificarButonImplemento;
