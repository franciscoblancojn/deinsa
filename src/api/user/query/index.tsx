import { useApiQuery } from 'fenextjs';
import { IApiResultTable } from '@/interface/api';
import { IUser } from '@/interface/user';

export interface useQueryUserInputProps {
    id?: string;
}

export interface useQueryUserProps {
    input?: useQueryUserInputProps;
}
export const useQueryUser = ({ input }: useQueryUserProps) => {
    return useApiQuery<useQueryUserInputProps, IApiResultTable<IUser>>({
        url: '/api/user/get',
        input,
        key: 'user',
    });
};
