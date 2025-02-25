import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { Container } from '@/ui-fenextjs/Container';
import { Link } from '@/ui-fenextjs/Link';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export interface HeaderLoginProps {}

// Header de las paginas de auth

export const HeaderLogin = ({}: HeaderLoginProps) => {
    return (
        <>
            <Container
                className={`
                header-login
                flex
                justify-between
                gap-4
                items-center    
            `}
            >
                <Link
                    href={URL.home.index}
                    className={`
                    header-login-logo
                    flex
                    gap-2
                    items-center

                `}
                >
                    <div className="w-6">
                        <Logo />
                    </div>
                    <Title tag="h4">Deinsa</Title>
                </Link>
                <div>
                    <ChangeLang />
                </div>
            </Container>
        </>
    );
};
