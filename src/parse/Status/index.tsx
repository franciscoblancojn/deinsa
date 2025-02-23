import { IStatus, IStatusPay } from '@/interface/status';
import { parseEnum_to_String } from 'fenextjs';

export const parseStatus = parseEnum_to_String<IStatus>(
    {
        ACTIVE: 'Activo',
        DELETE: 'Eliminado',
        INACTIVE: 'Inactivo',
    },
    {
        valueNull: 'No disponible',
    },
);

export const parseStatusPay = parseEnum_to_String<IStatusPay>(
    {
        CANCEL: 'Cancelado',
        PAY: 'Pagado',
        PENDING: 'Pendiente',
    },
    {
        valueNull: 'No disponible',
    },
);
