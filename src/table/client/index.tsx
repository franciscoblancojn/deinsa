import { useUpdateClient } from '@/api/client/update';
import { IClient } from '@/interface/client';
import { IStatus } from '@/interface/status';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus } from '@/parse/Status';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { SvgCheck, SvgClose, SvgTrash } from 'fenextjs';

export interface TableClientProps extends ITable<IClient> {}

export const TableClient = ({ ...props }: TableClientProps) => {
    const { mutate, isPending } = useUpdateClient({});
    return (
        <Table<IClient>
            name="Clientes"
            {...props}
            actionsCheckbox={{
                actions: [
                    (clients) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgCheck />}
                                    onClick={() => {
                                        mutate({
                                            ids: clients?.map((e) => e.id),
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

                    (clients) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgClose />}
                                    onClick={() => {
                                        mutate({
                                            ids: clients?.map((e) => e.id),
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

                    (clients) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgTrash />}
                                    onClick={() => {
                                        mutate({
                                            ids: clients?.map((e) => e.id),
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
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.client.index + client.id}
                            >
                                {client?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'name',
                    th: 'Nombre',
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.client.index + client.id}
                            >
                                {client?.name}
                            </Link>
                        );
                    },
                },
                {
                    id: 'email',
                    th: 'Correo',
                    parse: (client) => {
                        return (
                            <Link
                                useT={false}
                                href={'mailto:' + client.email}
                                target="_blank"
                            >
                                {client?.email}
                            </Link>
                        );
                    },
                },
                {
                    id: 'status',
                    th: 'Estatus',
                    parse: (client) => {
                        return parseStatus(client?.status);
                    },
                },
                {
                    id: 'createdAt',
                    th: 'Fecha de Creacion',
                    parse: (client) => {
                        return parseDateTimeFormat_DD_MM_YY(client?.createdAt);
                    },
                },
                {
                    id: 'updatedAt',
                    th: 'Fecha de Actualizacion',
                    parse: (client) => {
                        return parseDateTimeFormat_DD_MM_YY(client?.updatedAt);
                    },
                },
            ]}
        />
    );
};
