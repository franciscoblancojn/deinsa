import { ChangeLang } from '@/components/ChangeLang';
import { Container } from '@/ui-fenextjs/Container';
import { Img } from '@/ui-fenextjs/Img';
import { Link } from '@/ui-fenextjs/Link';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export interface HeaderLoginProps {}

export const HeaderLogin = ({}: HeaderLoginProps) => {
    return (
        <>
            <Container className="header-login">
                <Link href={URL.home.index} className="header-login-logo">
                    <Img src="https://fenextjs-doc.vercel.app/favicon.png" />
                    <Title tag="h4">Fenextjs</Title>
                </Link>
                <div>
                    <ChangeLang />
                </div>
            </Container>
        </>
    );
};
