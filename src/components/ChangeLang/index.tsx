'use client';

import React from 'react';
import { useLang } from '@/languages';
import { Container } from '@/ui-fenextjs/Container';
import { InputRadio } from '@/ui-fenextjs/Input';
import { Img } from '@/ui-fenextjs/Img';
export interface ChangeLangProps {}

export const ChangeLang = ({}: ChangeLangProps) => {
    const { setCurrentLang, currentLang } = useLang();
    return (
        <>
            <Container className="change-lang items-center px-4">
                <InputRadio<'es' | 'en'>
                    defaultValue={{
                        id: currentLang ?? 'es',
                        data: currentLang ?? 'es',
                        label: (currentLang ?? 'es')?.toUpperCase(),
                    }}
                    items={[
                        {
                            id: 'es',
                            data: 'es',
                            label: (
                                <>
                                    <Img
                                        src={
                                            'https://country-state-city-nextjs.vercel.app/country/28_espana/img.png'
                                        }
                                        className='w-6 rounded-full cursor-pointer'
                                    />
                                </>
                            ),
                        },
                        {
                            id: 'en',
                            data: 'en',
                            label: (
                                <>
                                    <Img
                                        src={
                                            'https://country-state-city-nextjs.vercel.app/country/55_estados_unidos/img.png'
                                        }
                                        className='w-6 rounded-full cursor-pointer'
                                    />
                                </>
                            ),
                        },
                    ]}
                    onChange={(e) => {
                        setCurrentLang(e?.data);
                    }}
                    classNameContent='grid gap-4 grid-cols-2 items-center'
                    classNameLabel='gap-0'
                    classNameContentRadio='!hidden'
                />
            </Container>
        </>
    );
};
