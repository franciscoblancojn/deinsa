import { useApiQuery } from 'fenextjs';
import { IApiResultTable } from '@/interface/api';
import { IResponsables } from '@/interface/responsables';

// input para filtrar responsables
export interface useQueryResponsablesInputProps {
    id?: string;
}

export interface useQueryResponsablesProps {
    input?: useQueryResponsablesInputProps;
}

// Hook para manejar la query de responsables
export const useQueryResponsables = ({ input }: useQueryResponsablesProps) => {
    return useApiQuery<
        useQueryResponsablesInputProps,
        IApiResultTable<IResponsables>
    >({
        url: '/api/responsables/get',
        input,
        key: 'responsables',
    });
};
