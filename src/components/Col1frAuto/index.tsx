import { GridCols } from 'fenextjs';
import React, { ReactNode } from 'react';
export interface Col1frAutoProps {
    children?: ReactNode;
}

export const Col1frAuto = ({ children }: Col1frAutoProps) => {
    return (
        <>
            <GridCols className="col-1fr-auto" colsMin768="1fr auto">
                {children}
            </GridCols>
        </>
    );
};
