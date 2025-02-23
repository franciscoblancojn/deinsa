'use client';

import { useUser } from '@/hook/useUser';
import { Button } from '@/ui-fenextjs/Button';
import { URL } from '@/url';
import { Menu } from 'fenextjs';

export interface HeaderDashboardLeftProps {}

export const HeaderDashboardLeft = ({}: HeaderDashboardLeftProps) => {
    const { onLogOut } = useUser({});
    return (
        <>
            <div className={`
                header-dashboard-left
                grid
                gap-4    
            `}>
                <div className={`
                    header-dashboard-left-menu
                    py-4    
                `}>
                    <Menu
                        items={[
                            {
                                text: 'Dashboard',
                                url: URL.home.index,
                            },
                            {
                                text: 'Responsables',
                                url: URL.responsables.index,
                            },
                        ]}
                    />
                </div>
                <Button
                    onClick={onLogOut}
                    full={true}
                    className={`
                        header-dashboard-left-btn-exit
                        !rounded-none
                        mt-auto
                    `}
                >
                    Salir
                </Button>
            </div>
        </>
    );
};
