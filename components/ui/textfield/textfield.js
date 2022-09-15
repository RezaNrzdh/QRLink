import * as S from './textfield.styled';

export const Textfield = ({
    width,
    inputWidth,
    ltr,
    prefix,
    label,
    placeholder,
    type,
    name,
    id,
    pattern = null,
    marginbottom = 24
}) => {

    const PrefixContent = () => {
        if(prefix){
            return <span>{prefix}</span>
        }
    }

    return(
        <S.Container marginbottom={marginbottom}>
            <S.Label>
                {label}
            </S.Label>
            <S.InputContainer width={width} inputWidth={inputWidth} ltr={ltr}>
                <PrefixContent />
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