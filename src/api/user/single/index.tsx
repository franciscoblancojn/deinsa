import { useRouter } from 'next/router';
import { useQueryUser } from '../query';

export interface useSingleUserProps {}
export const useSingleUser = ({}: useSingleUserProps) => {
    const { query, isReady } = useRouter();
    const { data, isLoading, ...HOOK } = useQueryUser({
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
