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
            <div className="layout-table">
                {top && <div className="layout-table-top">{top}</div>}
                <div className="layout-table-filter">
                    <FilterSearch />
                    <FilterDate />
                    {extraFilter}
                </div>
                <div className="layout-table-content">{children}</div>
            </div>
        </>
    );
};
