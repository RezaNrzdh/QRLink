import * as S from './button.styled';

export const Button = (props) => {
    return(
        <S.Wrapper variant={props.variant} color={props.color}>
            { props.children }
        </S.Wrapper>  
    );
}