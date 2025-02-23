import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import React from 'react';
import { Logo } from '../Logo';
export interface DeinsaInfoProps {}
// Componente de informacion para mostrar en login
export const DeinsaInfo = ({}: DeinsaInfoProps) => {
    return (
        <>
            <div className="dainsa-info grid gap-4">
                <div className="dainsa-info-top flex gap-4 items-center">
                    <div className="w-16">
                        <Logo />
                    </div>
                    <Title>Deinsa</Title>
                </div>
                <Text>Este es el Deinsa.</Text>
                <Text>
                    Espero les guste la integracion que hice con Nextjs 14,
                    typescript, tailwindcss y fenextjs
                </Text>
                <Text>Pueden usar este usuario para acceder:</Text>
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
