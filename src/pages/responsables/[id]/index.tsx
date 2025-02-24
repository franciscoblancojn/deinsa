'use client';
import { useSingleResponsables } from '@/api/responsables/single';
import { Col2Auto } from '@/components/Col2Auto';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageResponsablesSingle = () => {
    const { data, isLoading, error } = useSingleResponsables({});
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple error={error?.error} loader={isLoading}>
                    <Col2Auto>
                        <Title>Responsable</Title>
                        <Title useT={false}>{data?.Responsable}</Title>
                        <Text>ID</Text>
                        <Text useT={false}>#{data?.IDResponsable}</Text>
                        <Text>Email</Text>
                        <Link
                            href={`mailto:${data?.Correo}`}
                            target="_blank"
                            useT={false}
                        >
                            {data?.Correo}
                        </Link>
                        <Text>Telefono</Text>
                        <Link
                            href={`tel:${data?.Telefono}`}
                            target="_blank"
                            useT={false}
                        >
                            {data?.Telefono}
                        </Link>
                        <Text>IDCategoria</Text>
                        <Text useT={false}>#{data?.IDCategoria}</Text>
                        <Text>IDTipo</Text>
                        <Text useT={false}>#{data?.IDTipo}</Text>
                        <Text>Puesto</Text>
                        <Text useT={false}>#{data?.Puesto}</Text>
                    </Col2Auto>
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};

export default PageResponsablesSingle;
