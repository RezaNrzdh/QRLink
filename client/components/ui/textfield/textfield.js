import * as S from './textfield.styled';

export const Textfield = ({width, label, placeholder, type}) => {
    return(
        <S.TextfieldContainer>
            <S.Label>
                {label}
            </S.Label>
            <S.Textfield width={width}>
                <input placeholder={placeholder} type={type} />
            </S.Textfield>
        </S.TextfieldContainer>
    );
}