import { useRouter } from 'next/router';
import { useQuerySell } from '../query';

export interface useSingleSellProps {}
export const useSingleSell = ({}: useSingleSellProps) => {
    const { query, isReady } = useRouter();
    const { data, isLoading, ...HOOK } = useQuerySell({
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
