import { InputSelectStatusPay } from '@/components/Select/StatusPay';
import { useFilter } from '@/hook/useFilter';
import { usePagination } from 'fenextjs';
import { useEffect } from 'react';

export interface FilterStatusPayProps {
    nameFilter?: string;
}

export const FilterStatusPay = ({ nameFilter }: FilterStatusPayProps) => {
    const { onChangeData: onChangeDataPagination } = usePagination({
        name: nameFilter,
    });
    const { onChangeData, data, onDeleteData } = useFilter({});

    useEffect(() => {
        onDeleteData('statusPay');
    }, []);

    return (
        <>
            <div className="filter-status-pay">
                <InputSelectStatusPay
                    placeholder="Estado de Pago"
                    onChange={(status) => {
                        onChangeData('statusPay')(status);
                        onChangeDataPagination('page')(0);
                    }}
                    defaultValue={data?.statusPay}
                />
            </div>
        </>
    );
};
