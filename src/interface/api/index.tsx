import { useFilterCustomDataProps } from '@/hook/useFilter';
import { PaginationDataProps, useFilterDataProps } from 'fenextjs';

export interface IApiResultTable<T> {
    count: number;
    items: T[];
}

export interface IApiQuery
    extends PaginationDataProps,
        useFilterDataProps<useFilterCustomDataProps> {}
