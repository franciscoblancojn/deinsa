import { useUpdateResponsables } from '@/api/responsables/update';
import { IResponsables } from '@/interface/responsables';
import { IStatus } from '@/interface/status';
import { ITable } from '@/interface/table';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { SvgCheck, SvgClose, SvgTrash } from 'fenextjs';

export interface TableResponsablesProps extends ITable<IResponsables> {}

// Tabla de Responsables
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
                                            ids: users?.map(
                                                (e) => e.IDResponsable,
                                            ),
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
                                            ids: users?.map(
                                                (e) => e.IDResponsable,
                                            ),
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
                                            ids: users?.map(
                                                (e) => e.IDResponsable,
                                            ),
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
                    id: 'IDResponsable',
                    th: 'ID',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={
                                    URL.responsables.index + user.IDResponsable
                                }
                            >
                                {user?.IDResponsable}
                            </Link>
                        );
                    },
                },
                {
                    id: 'Responsable',
                    th: 'Responsable',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={
                                    URL.responsables.index + user.IDResponsable
                                }
                            >
                                {user?.Responsable}
                            </Link>
                        );
                    },
                },
                {
                    id: 'IDCategoria',
                    th: 'IDCategoria',
                },
                {
                    id: 'Correo',
                    th: 'Correo',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={'mailto:' + user.Correo}
                                target="_blank"
                            >
                                {user?.Correo}
                            </Link>
                        );
                    },
                },
                {
                    id: 'Telefono',
                    th: 'Telefono',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={'tel:' + user.Telefono}
                                target="_blank"
                            >
                                {user?.Telefono}
                            </Link>
                        );
                    },
                },
                {
                    id: 'IDTipo',
                    th: 'IDTipo',
                },
                {
                    id: 'Puesto',
                    th: 'Puesto',
                },
            ]}
        />
    );
};
