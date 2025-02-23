import { useApiQuery } from 'fenextjs';
import { IApiResultTable } from '@/interface/api';
import { IClient } from '@/interface/client';

export interface useQueryClientInputProps {}

export interface useQueryClientProps {
    input?: useQueryClientInputProps;
}
export const useQueryClient = ({ input }: useQueryClientProps) => {
    return useApiQuery<useQueryClientInputProps, IApiResultTable<IClient>>({
        url: '/api/client/get',
        input,
        key: 'client',
    });
};
