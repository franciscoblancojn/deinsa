import React, { ReactNode } from 'react';
import { GridCols } from 'fenextjs';

export interface Col2AutoProps {
    children?: ReactNode;
}
// Componentes para manejar un grid con tempalte colums auto auto
export const Col2Auto = ({ children }: Col2AutoProps) => {
    return (
        <>
            <GridCols className="col-2-auto w-fit" colsMin992="auto auto">
                {children}
            </GridCols>
        </>
    );
};
