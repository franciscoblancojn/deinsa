'use client';
import { useSingleUser } from '@/api/user/single';
import { Col2Auto } from '@/components/Col2Auto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseRole } from '@/parse/Role';
import { parseStatus } from '@/parse/Status';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageUserSingle = () => {
    const { data, isLoading, error } = useSingleUser({});
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple error={error?.error} loader={isLoading}>
                    <Col2Auto>
                        <Title>Usuario</Title>
                        <Title useT={false}>{data?.name}</Title>
                        <Text>ID</Text>
                        <Text useT={false}>#{data?.id}</Text>
                        <Text>Email</Text>
                        <Link
                            href={`mailto:${data?.email}`}
                            target="_blank"
                            useT={false}
                        >
                            {data?.email}
                        </Link>
                        <Text>Rol</Text>
                        <Text useT={false}>{parseRole(data?.role)}</Text>
                        <Text>Estatus</Text>
                        <Text useT={false}>{parseStatus(data?.status)}</Text>
                        <Text>Fecha de creacion</Text>
                        <Text useT={false}>
                            {parseDateTimeFormat_DD_MM_YY(data?.createdAt)}
                        </Text>
                        <Text>Fecha de actualizacion</Text>
                        <Text useT={false}>
                            {parseDateTimeFormat_DD_MM_YY(data?.updatedAt)}
                        </Text>
                    </Col2Auto>
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};

export default PageUserSingle;
