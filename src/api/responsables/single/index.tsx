import { useRouter } from 'next/router';
import { useQueryResponsables } from '../query';

export interface useSingleResponsablesProps {}

// Hook para manejar la query de responsables obteniendo un elemento por id
export const useSingleResponsables = ({}: useSingleResponsablesProps) => {
    const { query, isReady } = useRouter();
    const { data, isLoading, ...HOOK } = useQueryResponsables({
        input: {
            id: `${query?.id}`,
        },
    });
    return {
        ...HOOK,
        isLoading: isLoading || !isReady,
        data: data?.data?.items?.[0],
    };
};
