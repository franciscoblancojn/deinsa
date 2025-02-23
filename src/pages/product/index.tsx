'use client';
import { useQueryProduct } from '@/api/product/query';
import { Col1frAuto } from '@/components/Col1frAuto';
import { FilterStatus } from '@/filter/Status';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableProduct } from '@/table/product';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export const PageProduct = () => {
    const { data, isLoading, error } = useQueryProduct({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Col1frAuto>
                                <div>
                                    <Title>Productos</Title>
                                    <Text>
                                        Aqui puedes mirar tus productos.
                                    </Text>
                                </div>
                                <Link href={URL.product.create.index}>
                                    <Button>Crear Producto</Button>
                                </Link>
                            </Col1frAuto>
                        </>
                    }
                    extraFilter={
                        <>
                            <FilterStatus />
                        </>
                    }
                >
                    <TableProduct
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

export default PageProduct;
