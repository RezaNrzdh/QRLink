import * as S from './textfield.styled';

export const Textfield = ({
    width,
    label,
    placeholder,
    type,
    marginbottom = 24
}) => {
    return(
        <S.TextfieldContainer marginbottom={marginbottom}>
            <S.Label>
                {label}
            </S.Label>
            <S.Textfield width={width}>
                <input placeholder={placeholder} type={type} />
            </S.Textfield>
        </S.TextfieldContainer>
    );
}