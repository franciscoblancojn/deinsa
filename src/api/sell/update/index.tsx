import { IStatus } from '@/interface/status';
import { IApiRespond, useApiMutation, useNotification } from 'fenextjs';

export interface useUpdateSellInputProps {
    ids: string[];
    status: IStatus;
}

export interface useUpdateSellProps {}
export const useUpdateSell = ({}: useUpdateSellProps) => {
    const { pop } = useNotification({});
    return useApiMutation<useUpdateSellInputProps, IApiRespond<unknown>>({
        url: '/api/sell/update',
        key: 'sell',
        options: {
            method: 'PATCH',
        },
        onSuccess: () => {
            pop({
                message: 'Ventas Actualizadas',
                type: 'OK',
            });
        },
        onError: (error) => {
            pop({
                message: error?.message,
                type: 'ERROR',
            });
        },
    });
};
