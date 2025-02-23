import React, { ReactNode } from 'react';
import { GridCols } from 'fenextjs';

export interface Col2AutoProps {
    children?: ReactNode;
}

export const Col2Auto = ({ children }: Col2AutoProps) => {
    return (
        <>
            <GridCols className="col-2-auto" colsMin992="auto auto">
                {children}
            </GridCols>
        </>
    );
};
