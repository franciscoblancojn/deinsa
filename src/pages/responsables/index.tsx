'use client';
import { useQueryResponsables } from '@/api/responsables/query';
import { Col1frAuto } from '@/components/Col1frAuto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableResponsables } from '@/table/responsables';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageResponsables = () => {
    const { data, isLoading, error } = useQueryResponsables({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Col1frAuto>
                                <div>
                                    <Title>Responsables</Title>
                                    <Text>
                                        Aqui puedes mirar tus Responsables.
                                    </Text>
                                </div>
                            </Col1frAuto>
                        </>
                    }
                >
                    <TableResponsables
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

export default PageResponsables;
