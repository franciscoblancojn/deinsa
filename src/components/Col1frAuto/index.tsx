import { GridCols } from 'fenextjs';
import React, { ReactNode } from 'react';
export interface Col1frAutoProps {
    children?: ReactNode;
}
// Componentes para manejar un grid con tempalte colums 1fr auto
export const Col1frAuto = ({ children }: Col1frAutoProps) => {
    return (
        <>
            <GridCols className="col-1fr-auto" colsMin768="1fr auto">
                {children}
            </GridCols>
        </>
    );
};
