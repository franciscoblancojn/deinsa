import { IStatus } from '@/interface/status';
import {
    useFilter as useFilterFenextjs,
    useFilterProps as useFilterFenextjsProps,
} from 'fenextjs';

// Data de Filtros globales
export interface useFilterCustomDataProps {
    status?: IStatus;
}

export interface useFilterProps
    extends useFilterFenextjsProps<useFilterCustomDataProps> {}

// Hook para el manejo de filtros para los Hook Query
export const useFilter = ({ ...props }: useFilterProps) => {
    return useFilterFenextjs<useFilterCustomDataProps>({
        ...props,
    });
};
