import { useApiQuery } from 'fenextjs';
import { IApiResultTable } from '@/interface/api';
import { ISell } from '@/interface/sell';

export interface useQuerySellInputProps {}

export interface useQuerySellProps {
    input?: useQuerySellInputProps;
}
export const useQuerySell = ({ input }: useQuerySellProps) => {
    return useApiQuery<useQuerySellInputProps, IApiResultTable<ISell>>({
        url: '/api/sell/get',
        input,
        key: 'sell',
    });
};
