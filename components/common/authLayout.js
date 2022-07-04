import { Color } from 'utils/color';
import styled from 'styled-components';

export const AuthLayout = (props) => {
    return(
        <Background>
            {props.children}
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${Color.background.main};
`;