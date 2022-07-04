import Container from 'hoc/container';
import {Navigation, Logo} from 'components/index';
import { Button, TextButton } from 'components/index';
import styled from 'styled-components';
import {Elevation} from 'components/index';
import { Color } from 'utils/color';

export const DesktopHeader = () => {
    return(
        <Header>
            <Container middle>
                <Logo />
                <Navigation />
                <Auth>
                    <TextButton href='/auth/login' colors='dark'>ورود</TextButton>
                    <Button href='/auth/register' colors='primary'>عضویت</Button>
                </Auth>
            </Container>
        </Header>
    );
}

const Header = styled.header`
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;
    box-shadow: ${Elevation.header};
    z-index: 999;
    .logo{
        display: flex;
        width: 160px;
        height: 30px;
        cursor: pointer;
        svg{
            fill: ${Color.primary.main}
        }
    }
`;

const Auth = styled.div`
    display: flex;
    margin-right: auto;
    a:first-child{
        margin-left: 16px;
    }
`;