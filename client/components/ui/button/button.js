import * as S from './button.styled';

export const Button = (props) => {
    return(
        <S.Wrapper variant={props.variant} colors={props.colors}>
            { props.children }
        </S.Wrapper>  
    );
}