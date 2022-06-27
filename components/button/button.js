import * as S from './button.styled';

export const Button = (props) => {
    return(
        <S.Wrapper as={props.as} href={props.href} variant={props.variant} colors={props.colors} width={props.width} type={props.type}>
            { props.children }
        </S.Wrapper>  
    );
}