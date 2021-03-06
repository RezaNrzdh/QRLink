import styled, {css} from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';


const Colors = ({colors}) => {
    if(colors === 'primary'){
        return css`
            border: 1px solid ${Color.primary.main};
            color: ${Color.text.main};
        `;
    }
    else if(colors === 'success'){
        return css`
            border: 1px solid ${Color.success.main};
            color: ${Color.success.main};
        `;
    }
    else if(colors === 'dark'){
        return css`
            border: 1px solid ${Color.action.outlined};    
            color: ${Color.text.contrast};
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
    border-radius: ${p => p.radius };
    background-color: none;
    font-family: VazirMatnFont;
    transition: all ease-in-out 0.3s;
    ${Colors};
    ${Typography.Body2}
`;