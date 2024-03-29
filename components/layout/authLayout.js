import { Color } from 'constants/color';
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
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${Color.background.main};
`;