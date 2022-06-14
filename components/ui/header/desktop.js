import Link from 'next/link';
import Container from 'hoc/container';
import * as S from './desktop.styled';
import {Navigation, Logo} from 'components/index';
import { Button } from 'components/index';

export const DesktopHeader = () => {
    return(
        <S.Header>
            <Container middle>
                <Logo />
                <Navigation />
                <S.Auth>
                    <Button href='/auth/login' variant='text' colors='dark'>ورود</Button>
                    <Button href='/auth/register' variant='contained' colors='primary'>عضویت</Button>
                </S.Auth>
            </Container>
        </S.Header>
    );
}