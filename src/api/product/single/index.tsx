import { useRouter } from 'next/router';
import { useQueryProduct } from '../query';

export interface useSingleProductProps {}
export const useSingleProduct = ({}: useSingleProductProps) => {
    const { query, isReady } = useRouter();
    const { data, isLoading, ...HOOK } = useQueryProduct({
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
