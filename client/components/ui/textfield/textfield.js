import * as S from './textfield.styled';

export const Textfield = ({width, label, placeholder}) => {
    return(
        <S.TextfieldContainer>
            <S.Label>
                {label}
            </S.Label>
            <S.Textfield width={width}>
                <input placeholder={placeholder} />
            </S.Textfield>
        </S.TextfieldContainer>
    );
}