import styled, {css} from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';


const Colors = ({colors}) => {
    if(colors === 'primary'){
        return css`
            background-color: ${Color.primary.main};
            color: ${Color.text.main};
            &:hover{
                background-color: ${Color.action.outlined};
                color: ${Color.text.contrast};
            }
        `;
    }
    else if(colors === 'success'){
        return css`
            background-color: ${Color.success.main};
            color: ${Color.success.main};
            &:hover{
                background-color: ${Color.action.outlined};
                color: ${Color.text.contrast};
            }
        `;
    }
    else if(colors === 'dark'){
        return css`
            background-color: ${Color.action.outlined};    
            color: ${Color.text.contrast};
            &:hover{
                background-color: ${Color.action.hover};
                color: ${Color.text.main};
            }
        `;
    }
    else {
        return css`
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
    font-family: VazirMatnFont;
    transition: all ease-in-out 0.3s;
    ${Colors};
    ${Typography.Body2}
`;