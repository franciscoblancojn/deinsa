import { useUpdateSell } from '@/api/sell/update';
import { ISell } from '@/interface/sell';
import { IStatus } from '@/interface/status';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus, parseStatusPay } from '@/parse/Status';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { Text } from '@/ui-fenextjs/Text';
import { URL } from '@/url';
import { parseNumberCount, SvgCheck, SvgClose, SvgTrash } from 'fenextjs';
import { TableProduct } from '../product';

export interface TableSellProps extends ITable<ISell> {}

export const TableSell = ({ ...props }: TableSellProps) => {
    const { mutate, isPending } = useUpdateSell({});
    return (
        <Table<ISell>
            name="Selles"
            {...props}
            actionsCheckbox={{
                actions: [
                    (sells) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgCheck />}
                                    onClick={() => {
                                        mutate({
                                            ids: sells?.map((e) => e.id),
                                            status: IStatus.ACTIVE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Activar
                                </Button>
                            </>
                        );
                    },

                    (sells) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgClose />}
                                    onClick={() => {
                                        mutate({
                                            ids: sells?.map((e) => e.id),
                                            status: IStatus.INACTIVE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Desactivar
                                </Button>
                            </>
                        );
                    },

                    (sells) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgTrash />}
                                    onClick={() => {
                                        mutate({
                                            ids: sells?.map((e) => e.id),
                                            status: IStatus.DELETE,
                                        });
                                    }}
                                    loader={isPending}
                                >
                                    Eliminar
                                </Button>
                            </>
                        );
                    },
                ],
            }}
            header={[
                {
                    id: 'id',
                    th: 'ID',
                    parse: (sell) => {
                        return (
                            <Link useT={false} href={URL.sell.index + sell.id}>
                                {sell?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'client',
                    th: 'Cliente',
                    parse: (sell) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.client.index + sell.client?.id}
                            >
                                {sell?.client?.name}
                            </Link>
                        );
                    },
                },

                {
                    id: 'total',
                    th: 'Total',
                    parse: (sell) => {
                        return '$' + parseNumberCount(sell?.total);
                    },
                },
                {
                    id: 'status',
                    th: 'Estatus',
                    parse: (sell) => {
                        return parseStatus(sell?.status);
                    },
                },
                {
                    id: 'statusPay',
                    th: 'Estado de Pago',
                    parse: (sell) => {
                        return parseStatusPay(sell?.statusPay);
                    },
                },
                {
                    id: 'products',
                    th: 'Productos',
                    isCollapse: true,
                    collapseProps: {
                        header: (
                            <>
                                <Text>Ver Productos</Text>
                            </>
                        ),
                    },
                    parse: (sell) => {
                        return (
                            <TableProduct
                                items={sell.products?.map((e) => {
                                    return {
                                        ...e.product,
                                        count: e?.count,
                                    };
                                })}
                                nItems={sell?.products?.length}
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
                        );
                    },
                },
                {
                    id: 'createdAt',
                    th: 'Fecha de Creacion',
                    parse: (sell) => {
                        return parseDateTimeFormat_DD_MM_YY(sell?.createdAt);
                    },
                },
                {
                    id: 'updatedAt',
                    th: 'Fecha de Actualizacion',
                    parse: (sell) => {
                        return parseDateTimeFormat_DD_MM_YY(sell?.updatedAt);
                    },
                },
            ]}
        />
    );
};
