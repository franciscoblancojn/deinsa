import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { ErrorFenextjs, Loader } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutSimpleProps {
    loader?: boolean;
    error?: ErrorFenextjs;
    children?: ReactNode;
}

// Layout para la carga de paginas de Detalle para manejar error y loader

export const LayoutSimple = ({
    children,
    error,
    loader,
}: LayoutSimpleProps) => {
    return (
        <>
            <div className="layout-simple">
                {loader ? (
                    <Loader
                        classNameLoader={`
                            absolute
                            inset-0
                            m-auto  
                        `}
                    />
                ) : (
                    <>
                        {error ? (
                            <ErrorComponent error={error} />
                        ) : (
                            <>{children}</>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
