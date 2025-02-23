'use client';

import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { useUser } from '@/hook/useUser';
import { Button } from '@/ui-fenextjs/Button';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { User } from '@/ui-fenextjs/User';
import { ButtonMenu, DropDown } from 'fenextjs';

export interface HeaderDashboardProps {}

export const HeaderDashboard = ({}: HeaderDashboardProps) => {
    const { user, onLogOut } = useUser({});
    return (
        <>
            <div className={`
                    header-dashboard
                    flex
                    justify-between
                    gap-4
                    items-center
                    w-full
                    px-4
                
                `}>
                <ButtonMenu>
                    <div className={`
                        header-dashboard-logo
                        flex
                        gap-2
                        items-center

                        `}>
                        <div className='w-6'>
                        <Logo />
                        </div>
                        <Title tag="h4">Deinsa</Title>
                    </div>
                </ButtonMenu>
                <div>
                    <DropDown
                        header={
                            <>
                                <User user={user ?? undefined} />
                            </>
                        }
                        className={`
                            header-dashboard-dropdown-user
                            !py-0    
                        `}
                        classNameBody={`
                            header-dashboard-dropdown-user-body
                            grid 
                            gap-4    
                        `}
                    >
                        <div className={`
                            header-dashboard-dropdown-user-lang
                            flex
                            items-center
                            gap-4
                        `}>
                            <Text tag="strong">Idiomas</Text>
                            <div className='w-16'>
                                <ChangeLang />
                            </div>
                        </div>
                        <Button
                            onClick={onLogOut}
                            full={true}
                            size="extra-small"
                        >
                            Salir
                        </Button>
                    </DropDown>
                </div>
            </div>
        </>
    );
};
