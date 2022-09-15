import styled from 'styled-components';
import { Color } from 'constants/color';
import { Typography } from 'constants/typography';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ p => `${p.marginbottom}px`};
`;

export const Label = styled.label`
    display: flex;
    color: ${Color.text.main};
    ${Typography.Body2};
    margin-bottom: 6px;
`;

export const InputContainer = styled.div`
    display: flex;
    overflow: hidden;
    direction: ${ p => p.ltr ? 'ltr' : null};
    width: ${ p => p.width ? `${p.width}px` : null };
    height: 40px;
    border: 1px solid ${Color.stroke.main};
    border-radius: 20px;
    padding-right: 16px;
    padding-left: 16px;
    span{
        display: flex;
        align-items: center;
        height: inherit;
        ${Typography.Caption};
        color: ${Color.text.light};
    };
    input {
        background-color: transparent;
        width: ${ p => p.inputWidth ? `${p.inputWidth}px` : '100%'};
        border: none;
        outline: none;
        font-family: VazirMatnFont;
        color: ${Color.text.main};
        &::placeholder{
            color: ${Color.text.light};
        }
    };
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        transition: background-color 5000s;
        -webkit-text-fill-color: ${Color.text.main} !important;
}
`;