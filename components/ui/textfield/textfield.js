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
        <S.TextfieldContainer marginbottom={marginbottom}>
            <S.Label>
                {label}
            </S.Label>
            <S.Textfield width={width}>
                <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={id}
                    pattern={pattern}
                    />
            </S.Textfield>
        </S.TextfieldContainer>
    );
}