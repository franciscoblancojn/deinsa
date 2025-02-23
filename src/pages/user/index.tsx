'use client';
import { useQueryUser } from '@/api/user/query';
import { Col1frAuto } from '@/components/Col1frAuto';
import { FilterStatus } from '@/filter/Status';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableUser } from '@/table/user';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export const PageUser = () => {
    const { data, isLoading, error } = useQueryUser({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Col1frAuto>
                                <div>
                                    <Title>Usuarios</Title>
                                    <Text>Aqui puedes mirar tus usuarios.</Text>
                                </div>
                                <Link href={URL.user.create.index}>
                                    <Button>Crear Usuario</Button>
                                </Link>
                            </Col1frAuto>
                        </>
                    }
                    extraFilter={
                        <>
                            <FilterStatus />
                        </>
                    }
                >
                    <TableUser
                        items={data?.data?.items}
                        nItems={data?.data?.count}
                        loader={isLoading}
                        error={error?.error}
                    />
                </LayoutTable>
            </LayoutDashboard>
        </>
    );
};

export default PageUser;
