import { IStatus } from '@/interface/status';
import { IApiRespond, useApiMutation, useNotification } from 'fenextjs';

export interface useUpdateProductInputProps {
    ids: string[];
    status: IStatus;
}

export interface useUpdateProductProps {}
export const useUpdateProduct = ({}: useUpdateProductProps) => {
    const { pop } = useNotification({});
    return useApiMutation<useUpdateProductInputProps, IApiRespond<unknown>>({
        url: '/api/product/update',
        key: 'product',
        options: {
            method: 'PATCH',
        },
        onSuccess: () => {
            pop({
                message: 'Productos Actualizados',
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
