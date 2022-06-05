import Container from 'hoc/container';
import * as S from './header.styled';

export const DesktopHeader = () => {
    return(
        <S.DesktopHeader>
            <Container>
                <button>Home</button>
                <button>Pricing</button>
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