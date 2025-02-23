import { IStatus } from '@/interface/status';
import { IApiRespond, useApiMutation, useNotification } from 'fenextjs';

export interface useUpdateUserInputProps {
    ids: string[];
    status: IStatus;
}

export interface useUpdateUserProps {}
export const useUpdateUser = ({}: useUpdateUserProps) => {
    const { pop } = useNotification({});
    return useApiMutation<useUpdateUserInputProps, IApiRespond<unknown>>({
        url: '/api/user/update',
        key: 'user',
        options: {
            method: 'PATCH',
        },
        onSuccess: () => {
            pop({
                message: 'Usuarios Actualizados',
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
