import { IStatus, IStatusPay } from '@/interface/status';
import {
    useFilter as useFilterFenextjs,
    useFilterProps as useFilterFenextjsProps,
} from 'fenextjs';

export interface useFilterCustomDataProps {
    status?: IStatus;
    statusPay?: IStatusPay;
}

export interface useFilterProps
    extends useFilterFenextjsProps<useFilterCustomDataProps> {}

export const useFilter = ({ ...props }: useFilterProps) => {
    return useFilterFenextjs<useFilterCustomDataProps>({
        ...props,
    });
};
