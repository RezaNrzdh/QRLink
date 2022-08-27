import styled, {css} from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';


const Colors = ({colors}) => {
    if(colors === 'dark'){
        return css`
            color: ${Color.text.main};
            &:hover{
                background-color: ${Color.action.hover};
            }
        `;
    }
}

export const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    width: ${ p => p.fullWidth ? '100%' : null};
    height: 40px;
    border: none;
    border-radius: ${p => p.radius };
    background-color: none;
    font-family: VazirMatnFont;
    transition: all ease-in-out 0.3s;
    ${Colors};
    ${Typography.Body2}
`;