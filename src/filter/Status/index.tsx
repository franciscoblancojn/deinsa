import { InputSelectStatus } from '@/components/Select/Status';
import { useFilter } from '@/hook/useFilter';
import { usePagination } from 'fenextjs';
import { useEffect } from 'react';

export interface FilterStatusProps {
    nameFilter?: string;
}

export const FilterStatus = ({ nameFilter }: FilterStatusProps) => {
    const { onChangeData: onChangeDataPagination } = usePagination({
        name: nameFilter,
    });
    const { onChangeData, data, onDeleteData } = useFilter({});

    useEffect(() => {
        onDeleteData('status');
    }, []);

    return (
        <>
            <div className="filter-status">
                <InputSelectStatus
                    placeholder="Estatus"
                    onChange={(status) => {
                        onChangeData('status')(status);
                        onChangeDataPagination('page')(0);
                    }}
                    defaultValue={data?.status}
                />
            </div>
        </>
    );
};
