import Container from 'hoc/container';
import * as S from './header.styled';
import {Navigation} from 'components/index';
import { Button } from '../button/button';

export const DesktopHeader = () => {
    return(
        <S.DesktopHeader>
            <Container middle>
                <Navigation />
                <Button variant='contained' color='primary'>عضویت</Button>
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