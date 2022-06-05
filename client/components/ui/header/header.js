import Container from 'hoc/container';
import * as S from './header.styled';
import {Navigation} from 'components/index';

export const DesktopHeader = () => {
    return(
        <S.DesktopHeader>
            <Container middle>
                <Navigation />
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