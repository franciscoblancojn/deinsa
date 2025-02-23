import { useUpdateUser } from '@/api/user/update';
import { IUser } from '@/interface/user';
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

export interface TableUserProps extends ITable<IUser> {}

export const TableUser = ({ ...props }: TableUserProps) => {
    const { mutate, isPending } = useUpdateUser({});
    return (
        <Table<IUser>
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
                            <Link useT={false} href={URL.user.index + user.id}>
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
                            <Link useT={false} href={URL.user.index + user.id}>
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
