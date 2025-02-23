import { HeaderDashboard } from '@/header/Dashboard';
import { Container } from '@/ui-fenextjs/Container';
import { LayoutGridMenuTopLeft } from 'fenextjs';
import { ReactNode } from 'react';
import { LayoutAuth } from '../Auth';
import { HeaderDashboardLeft } from '@/header/DashboardLeft';

export interface LayoutDashboardProps {
    children?: ReactNode;
}

export const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <>
            <LayoutAuth>
                <LayoutGridMenuTopLeft
                    useHeaderButtonMenu={true}
                    className="layout-dashboard"
                    menuTop={<HeaderDashboard />}
                    menuLeft={<HeaderDashboardLeft />}
                    classNameChildren={`
                      grid  
                    `}
                    classNameMenuLeft={`
                      grid  
                    `}
                    classNameMenuLeftContent={`
                      grid  
                    `}
                >
                    <div
                        className={`
                        layout-dashboard-content
                        grid
                        py-4
                        relative    
                    `}
                    >
                        <Container>{children}</Container>
                    </div>
                </LayoutGridMenuTopLeft>
            </LayoutAuth>
        </>
    );
};
