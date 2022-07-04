import styled from 'styled-components';
import { Color } from 'utils/color';
import { Typography } from 'utils/typography';


export const Textfield = ({
    width,
    label,
    placeholder,
    type,
    name,
    id,
    pattern = null,
    marginbottom = 24
}) => {
    return(
        <Container marginbottom={marginbottom}>
            <Label>
                {label}
            </Label>
            <InputContainer width={width}>
                <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={id}
                    pattern={pattern}
                    />
            </InputContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ props => `${props.marginbottom}px`};
`;

const Label = styled.label`
    display: flex;
    color: ${Color.text.main};
    ${Typography.Body2};
    margin-bottom: 6px;
`;

const InputContainer = styled.div`
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