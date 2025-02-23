import { FilterDate, FilterSearch } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutTableProps {
    top?: ReactNode;
    children?: ReactNode;

    extraFilter?: ReactNode;
}

export const LayoutTable = ({
    children,
    top,
    extraFilter,
}: LayoutTableProps) => {
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
                    <FilterSearch />
                    <FilterDate />
                    {extraFilter}
                </div>
                <div className="layout-table-content">{children}</div>
            </div>
        </>
    );
};
