import { useLang } from '@/languages';
import { FilterDate, FilterSearch } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutTableProps {
    top?: ReactNode;
    children?: ReactNode;

    extraFilter?: ReactNode;
}
//Layout para las paginas de Tablas
export const LayoutTable = ({
    children,
    top,
    extraFilter,
}: LayoutTableProps) => {
    const { onTranslate } = useLang();
    return (
        <>
            <div
                className={`
                    layout-table
                    grid
                    gap-4
                `}
            >
                {top && (
                    <div
                        className={`
                    layout-table-top
                    grid
                    gap-4
                `}
                    >
                        {top}
                    </div>
                )}
                <div
                    className={`
                    layout-table-filter
                    flex
                    flex-wrap
                    gap-4    
                `}
                >
                    <FilterSearch _t={onTranslate} />
                    <FilterDate _t={onTranslate} />
                    {extraFilter}
                </div>
                <div className="layout-table-content">{children}</div>
            </div>
        </>
    );
};
