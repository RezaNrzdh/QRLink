import { Color } from 'components/utils/color';
import { Typography } from 'components/utils/typography';
import styled from 'styled-components';

export const TextfieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;

export const Label = styled.label`
    display: flex;
    color: ${Color.text.main};
    ${Typography.Body2};
    margin-bottom: 6px;
`;

export const Textfield = styled.div`
    display: flex;
    overflow: hidden;
    width: ${ props => props.width ? `${props.width}px` : null };
    height: 40px;
    border: 1px solid ${Color.stroke.main};
    border-radius: 20px;
    input {
        background-color: transparent;
        width: 100%;
        padding-right: 16px;
        padding-left: 16px;
        border: none;
        outline: none;
        font-family: VazirMatnFont;
        color: ${Color.text.main};
        &::placeholder{
            color: ${Color.text.light};
        }
    }
`;