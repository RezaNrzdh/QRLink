import { Color } from 'help/color';
import { Typography } from 'help/typography';
import styled, {css} from 'styled-components';

const Button = ({colors = 'dark'}) => {
    switch(colors){
        case 'primary': return PrimaryButton;
        case 'success': return SuccessButton;
        case 'dark': return DarkButton;
    }
}

const PrimaryButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.primary.main : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.primary.main}` : 'none' };
        color: ${Color.text.main};
        &:hover{
            background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.text.main : null };
            color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.text.contrast : null };;
        }
    `;
}

const SuccessButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.success.main : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.primary.main}` : 'none' };
        color: ${Color.text.main};
    `;
}

const DarkButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.action.outlined : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.action.outlined}` : 'none' };
        color: ${props.variant != 'contained' ? Color.text.main : Color.text.contrast };
        &:hover{
            background-color: ${ props.variant != 'contained' ? Color.action.hover : null };
        }        
    `;
}

export const Wrapper = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 24px;
    width: ${ props => props.width ? `${props.width}px` : '100%'};
    height: 40px;
    border-radius: 20px;
    font-family: VazirMatnFont;
    ${Typography.Body2}
    transition: all ease-in-out 0.3s;
    ${Button}
`;