import { useUpdateResponsables } from '@/api/responsables/update';
import { IResponsables } from '@/interface/responsables';
import { IStatus } from '@/interface/status';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus } from '@/parse/Status';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { SvgCheck, SvgClose, SvgTrash } from 'fenextjs';
import { parseRole } from '@/parse/Role';

export interface TableResponsablesProps extends ITable<IResponsables> {}

export const TableResponsables = ({ ...props }: TableResponsablesProps) => {
    const { mutate, isPending } = useUpdateResponsables({});
    return (
        <Table<IResponsables>
            name="Usuarios"
            {...props}
            actionsCheckbox={{
                actions: [
                    (users) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgCheck />}
                                    onClick={() => {
                                        mutate({
                                            ids: users?.map((e) => e.id),
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

                    (users) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgClose />}
                                    onClick={() => {
                                        mutate({
                                            ids: users?.map((e) => e.id),
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

                    (users) => {
                        return (
                            <>
                                <Button
                                    size="extra-small"
                                    icon={<SvgTrash />}
                                    onClick={() => {
                                        mutate({
                                            ids: users?.map((e) => e.id),
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
                    parse: (user) => {
                        return (
                            <Link useT={false} href={URL.responsables.index + user.id}>
                                {user?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'name',
                    th: 'Nombre',
                    parse: (user) => {
                        return (
                            <Link useT={false} href={URL.responsables.index + user.id}>
                                {user?.name}
                            </Link>
                        );
                    },
                },
                {
                    id: 'email',
                    th: 'Correo',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={'mailto:' + user.email}
                                target="_blank"
                            >
                                {user?.email}
                            </Link>
                        );
                    },
                },
                {
                    id: 'status',
                    th: 'Estatus',
                    parse: (user) => {
                        return parseStatus(user?.status);
                    },
                },
                {
                    id: 'role',
                    th: 'Rol',
                    parse: (user) => {
                        return parseRole(user?.role);
                    },
                },
                {
                    id: 'createdAt',
                    th: 'Fecha de Creacion',
                    parse: (user) => {
                        return parseDateTimeFormat_DD_MM_YY(user?.createdAt);
                    },
                },
                {
                    id: 'updatedAt',
                    th: 'Fecha de Actualizacion',
                    parse: (user) => {
                        return parseDateTimeFormat_DD_MM_YY(user?.updatedAt);
                    },
                },
            ]}
        />
    );
};
