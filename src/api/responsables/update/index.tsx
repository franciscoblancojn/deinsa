import { IStatus } from '@/interface/status';
import { IApiRespond, useApiMutation, useNotification } from 'fenextjs';

// Input para actualizar resposables
export interface useUpdateResponsablesInputProps {
    ids: string[];
    status: IStatus;
}

export interface useUpdateResponsablesProps {}
// Hook para manejar las actualizaciones de responsables
export const useUpdateResponsables = ({}: useUpdateResponsablesProps) => {
    const { pop } = useNotification({});
    return useApiMutation<
        useUpdateResponsablesInputProps,
        IApiRespond<unknown>
    >({
        url: '/api/responsables/update',
        key: 'responsables',
        options: {
            method: 'PATCH',
        },
        onSuccess: () => {
            pop({
                message: 'Responsables Actualizados',
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
