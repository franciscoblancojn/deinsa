import { useApiMutation, useApiMutationCallbackProps } from 'fenextjs';
import { IFormLogin } from '@/components/Form/Login/interface';
import { useUserDataProps } from '@/hook/useUser';

export interface useApiLoginProps
    extends useApiMutationCallbackProps<useUserDataProps> {}

export const useApiLogin = ({ ...props }: useApiLoginProps) => {
    return useApiMutation<IFormLogin, useUserDataProps>({
        url: '/api/auth/login',
        ...props,
        key: 'login',
    });
};
