import { useFilterCustomDataProps } from '@/hook/useFilter';
import { PaginationDataProps, useFilterDataProps } from 'fenextjs';

// Interface para Estandar de Resultados de datos en las tablas
export interface IApiResultTable<T> {
    count: number;
    items: T[];
}

// Interface para  Estandar de datos enviados por query
export interface IApiQuery
    extends PaginationDataProps,
        useFilterDataProps<useFilterCustomDataProps> {}
