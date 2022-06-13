import * as S from './button.styled';

export const Button = (props) => {
    return(
        <S.Wrapper href={props.href} variant={props.variant} colors={props.colors} width={props.width}>
            { props.children }
        </S.Wrapper>  
    );
}