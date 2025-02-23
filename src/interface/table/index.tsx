import { ErrorFenextjs } from 'fenextjs';

// Interface para Estandar de Datos de Tablas
export interface ITable<T> {
    items?: T[];
    nItems?: number;
    error?: ErrorFenextjs;
    loader?: boolean;
}
