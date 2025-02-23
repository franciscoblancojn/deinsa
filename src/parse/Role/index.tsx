import { IRole } from '@/interface/role';
import { parseEnum_to_String } from 'fenextjs';

export const parseRole = parseEnum_to_String<IRole>(
    {
        ADMIN: 'Admin',
        PRODUCTMANAGER: 'Gestor de producto',
    },
    {
        valueNull: 'No disponible',
    },
);
