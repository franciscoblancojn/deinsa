import { Button } from '@/ui-fenextjs/Button';
import { Img } from '@/ui-fenextjs/Img';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import React from 'react';
export interface FenextjsInfoProps {}

export const FenextjsInfo = ({}: FenextjsInfoProps) => {
    return (
        <>
            <div className="fenextjs-info">
                <div className="fenextjs-info-top">
                    <Img src="https://fenextjs-doc.vercel.app/favicon.png" />
                    <Title>Fenextjs</Title>
                </div>
                <Text>
                    Gracias por usar Fenextjs. Esta plantilla tiene una
                    estructura que te ayudará a usar fenextjs.
                </Text>
                <Text>
                    Recuerda que puedes agregar todos los componentes de
                    fenextjs, que necesites, a la carpeta ui-fenextjs, para
                    personalizarlo en estilos o agregarle mas funcionalidades
                </Text>
                <Text>
                    Esta plantilla tiene un ejemplo de dashboard, puedes usar el
                    siguiente usuario para navergarla:
                </Text>
                <Text tag="strong" useT={false}>
                    <Text tag="strong">Usuario</Text> : user@gmail.com
                </Text>
                <Text tag="strong" useT={false}>
                    <Text tag="strong">Contraseña</Text> : user1234
                </Text>
                <Link href={'https://fenextjs-doc.vercel.app'} target="_blank">
                    <Button>Fenextjs Documentación</Button>
                </Link>
            </div>
        </>
    );
};
