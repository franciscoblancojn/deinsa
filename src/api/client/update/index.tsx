import { IStatus } from '@/interface/status';
import { IApiRespond, useApiMutation, useNotification } from 'fenextjs';

export interface useUpdateClientInputProps {
    ids: string[];
    status: IStatus;
}

export interface useUpdateClientProps {}
export const useUpdateClient = ({}: useUpdateClientProps) => {
    const { pop } = useNotification({});
    return useApiMutation<useUpdateClientInputProps, IApiRespond<unknown>>({
        url: '/api/client/update',
        key: 'client',
        options: {
            method: 'PATCH',
        },
        onSuccess: () => {
            pop({
                message: 'Clientes Actualizados',
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
