'use client';
import { useSingleClient } from '@/api/client/single';
import { Col2Auto } from '@/components/Col2Auto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus } from '@/parse/Status';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageClientSingle = () => {
    const { data, isLoading, error } = useSingleClient({});
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple error={error?.error} loader={isLoading}>
                    <Col2Auto>
                        <Title>Cliente</Title>
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

export default PageClientSingle;
