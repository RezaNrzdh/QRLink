import Container from 'hoc/container';
import * as S from './header.styled';
import {Navigation, Logo} from 'components/index';
import { Button } from '../button/button';

export const DesktopHeader = () => {
    return(
        <S.DesktopHeader>
            <Container middle>
                <Logo />
                <Navigation />
                <S.Auth>
                    <Button variant='text' colors='primary'>ورود</Button>
                    <Button variant='contained' colors='primary'>عضویت</Button>
                </S.Auth>
            </Container>
        </S.DesktopHeader>
    );
}

export const MobileHeader = () => {
    return(
        <>
        </>
    );
}