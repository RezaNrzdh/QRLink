import * as S from './textfield.styled';

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
        <S.Container marginbottom={marginbottom}>
            <S.Label>
                {label}
            </S.Label>
            <S.InputContainer width={width}>
                <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={id}
                    pattern={pattern}
                    />
            </S.InputContainer>
        </S.Container>
    );
}