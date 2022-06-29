import Container from 'hoc/container';
import {Navigation, Logo} from 'components/index';
import { Button } from 'components/index';
import styled from 'styled-components';
import {Elevation} from 'components/index';
import { Color } from 'help/color';

export const DesktopHeader = () => {
    return(
        <Header>
            <Container middle>
                <Logo />
                <Navigation />
                <Auth>
                    <Button href='/auth/login' variant='text' colors='dark'>ورود</Button>
                    <Button href='/auth/register' variant='contained' colors='primary'>عضویت</Button>
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