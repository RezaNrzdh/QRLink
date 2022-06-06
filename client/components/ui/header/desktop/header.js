import Container from 'hoc/container';
import * as S from './header.styled';
import {Navigation, Logo} from 'components/index';
import { Button } from 'components/index';

export const DesktopHeader = () => {
    return(
        <S.Header>
            <Container middle>
                <Logo />
                <Navigation />
                <S.Auth>
                    <Button variant='text'>ورود</Button>
                    <Button variant='contained' colors='primary'>عضویت</Button>
                </S.Auth>
            </Container>
        </S.Header>
    );
}