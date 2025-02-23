'use client';
import { useQuerySell } from '@/api/sell/query';
import { Col1frAuto } from '@/components/Col1frAuto';
import { FilterStatus } from '@/filter/Status';
import { FilterStatusPay } from '@/filter/StatusPay';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableSell } from '@/table/sell';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export const PageSell = () => {
    const { data, isLoading, error } = useQuerySell({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Col1frAuto>
                                <div>
                                    <Title>Ventas</Title>
                                    <Text>Aqui puedes mirar tus Ventas.</Text>
                                </div>
                                <Link href={URL.sell.create.index}>
                                    <Button>Crear Venta</Button>
                                </Link>
                            </Col1frAuto>
                        </>
                    }
                    extraFilter={
                        <>
                            <FilterStatus />
                            <FilterStatusPay />
                        </>
                    }
                >
                    <TableSell
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

export default PageSell;
