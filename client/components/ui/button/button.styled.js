import { Color } from 'components/utils/color';
import styled, {css} from 'styled-components';

const Button = (props) => {
    switch(props.colors){
        case 'primary': return PrimaryButton;
        case 'success': return SuccessButton;
        case 'dark': return DarkButton;
    }
}

const PrimaryButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.primary.main : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.primary.main}` : null };
        color: ${Color.text.main};
    `;
}

const SuccessButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.success.main : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.primary.main}` : null };
        color: ${Color.text.main};
    `;
}

const DarkButton = (props) => {
    return css`
        background-color: ${ (props.variant != 'text' && props.variant != 'outlined') ? Color.action.outlined : null };
        border: ${ props.variant == 'outlined' ? `1px solid ${Color.action.outlined}` : null };
        color: ${props.variant != 'contained' ? Color.text.main : Color.text.contrast };
    `;
}

export const Wrapper = styled.a`
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 40px;
    border-radius: 20px;
    ${Button}
`;