import { ImgProps, useUser as useUserFenextjs } from 'fenextjs';

// Datos de Secion de Usuario
export interface useUserDataProps {
    id: string;
    name: string;
    email: string;
    img?: ImgProps;
    token: string;
}

export interface useUserProps {}

// Hook para el manejo de la secion de usuario
export const useUser = ({}: useUserProps) => {
    return useUserFenextjs<useUserDataProps>({
        // urlRedirectInLogin: URL.home.index,
        // urlRedirectInLogout:URL.auth.login.index,
        onValidateUser: (user) => {
            return user != undefined && user?.token != undefined;
        },
    });
};
