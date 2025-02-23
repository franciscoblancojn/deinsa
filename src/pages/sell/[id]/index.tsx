'use client';
import { useSingleSell } from '@/api/sell/single';
import { Col2Auto } from '@/components/Col2Auto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus, parseStatusPay } from '@/parse/Status';
import { TableProduct } from '@/table/product';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';
import { parseNumberCount } from 'fenextjs';

export const PageSellSingle = () => {
    const { data, isLoading, error } = useSingleSell({});
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple error={error?.error} loader={isLoading}>
                    <Col2Auto>
                        <Title>Venta</Title>
                        <Title useT={false}>#{data?.id}</Title>
                        <Title>Total</Title>
                        <Title useT={false}>
                            ${parseNumberCount(data?.total ?? 0)}
                        </Title>
                        <Text>Estatus</Text>
                        <Text useT={false}>{parseStatus(data?.status)}</Text>
                        <Text>Estado de Pago</Text>
                        <Text useT={false}>
                            {parseStatusPay(data?.statusPay)}
                        </Text>
                        <Text>Cliente</Text>
                        <Link
                            useT={false}
                            href={URL.client.index + data?.client?.id}
                        >
                            {data?.client?.name}
                        </Link>
                        <Text>Fecha de creacion</Text>
                        <Text useT={false}>
                            {parseDateTimeFormat_DD_MM_YY(data?.createdAt)}
                        </Text>
                        <Text>Fecha de actualizacion</Text>
                        <Text useT={false}>
                            {parseDateTimeFormat_DD_MM_YY(data?.updatedAt)}
                        </Text>
                    </Col2Auto>
                    <br />
                    <Title>Productos</Title>
                    <br />
                    <TableProduct
                        items={data?.products?.map((e) => {
                            return {
                                ...e.product,
                                count: e?.count,
                            };
                        })}
                        nItems={data?.products?.length}
                        extraHeader={[
                            {
                                id: 'id',
                                th: 'Cantidad',
                                parse: (product) => {
                                    return (
                                        'x' +
                                        parseNumberCount(
                                            (product as any)?.count,
                                        )
                                    );
                                },
                            },
                        ]}
                    />
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};

export default PageSellSingle;
