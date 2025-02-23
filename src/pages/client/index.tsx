'use client';
import { useQueryClient } from '@/api/client/query';
import { Col1frAuto } from '@/components/Col1frAuto';
import { FilterStatus } from '@/filter/Status';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableClient } from '@/table/client';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export const PageClient = () => {
    const { data, isLoading, error } = useQueryClient({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Col1frAuto>
                                <div>
                                    <Title>Clientes</Title>
                                    <Text>Aqui puedes mirar tus clientes.</Text>
                                </div>
                                <Link href={URL.client.create.index}>
                                    <Button>Crear Cliente</Button>
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
                    <TableClient
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

export default PageClient;
