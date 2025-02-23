import { DeinsaInfo } from '@/components/DeinsaInfo';
import { HeaderLogin } from '@/header/Login';
import { Container } from '@/ui-fenextjs/Container';
import { LayoutGridMenuTop } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutLoginProps {
    children?: ReactNode;
}

export const LayoutLogin = ({ children }: LayoutLoginProps) => {
    return (
        <>
            <LayoutGridMenuTop
                className="layout-login"
                menuTop={<HeaderLogin />}
                classNameChildren={`
                    grid    
                `}
            >
                <div className={`
                    layout-login-content
                    py-4
                    grid
                    items-center    
                `}>
                    <Container
                        className={`
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-12
                            items-center  
                        `}
                    >
                        <DeinsaInfo />
                        <div>{children}</div>
                    </Container>
                </div>
            </LayoutGridMenuTop>
        </>
    );
};
