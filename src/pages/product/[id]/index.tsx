'use client';
import { useSingleProduct } from '@/api/product/single';
import { Col2Auto } from '@/components/Col2Auto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { parseStatus } from '@/parse/Status';
import { Img } from '@/ui-fenextjs/Img';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { parseNumberCount } from 'fenextjs';

export const PageProductSingle = () => {
    const { data, isLoading, error } = useSingleProduct({});
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple error={error?.error} loader={isLoading}>
                    <Col2Auto>
                        <Img src={data?.image ?? ''} className="img-single" />
                        <Col2Auto>
                            <Title>Producto</Title>
                            <Title useT={false}>{data?.name}</Title>
                            <Text>ID</Text>
                            <Text useT={false}>#{data?.id}</Text>
                            <Text>Precio</Text>
                            <Text useT={false}>
                                ${parseNumberCount(data?.price ?? 0)}
                            </Text>
                            <Text>Estatus</Text>
                            <Text useT={false}>
                                {parseStatus(data?.status)}
                            </Text>
                            <Text>Descripcion</Text>
                            <Text useT={false} className="text-description">
                                {data?.description}
                            </Text>
                            <Text>Fecha de creacion</Text>
                            <Text useT={false}>
                                {parseDateTimeFormat_DD_MM_YY(data?.createdAt)}
                            </Text>
                            <Text>Fecha de actualizacion</Text>
                            <Text useT={false}>
                                {parseDateTimeFormat_DD_MM_YY(data?.updatedAt)}
                            </Text>
                        </Col2Auto>
                    </Col2Auto>
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};

export default PageProductSingle;
