import { Color } from 'components/utils/color';
import styled, {css} from 'styled-components';

const variant = ({variant}) => {
    switch(variant){
        case 'text':
            return css`
                color: ${Color.text.main};
            `;
        case 'contained': 
            return css`
                
            `; 
        case 'outlined':  
            return css`
                border-style: solid;
                border-width: 1px;
                background-color: transparent !important;
            `;
        default:
            return null;
    }
}

const colors = ({color}) => {
    switch(color){
        case 'primary':
            return css`
                background-color: ${Color.primary.main};
                color: ${Color.text.main};
            `;
        default:
            return null;
    }
}

export const Wrapper = styled.a`
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 40px;
    border-radius: 20px;
    ${variant}
    ${colors}
`;