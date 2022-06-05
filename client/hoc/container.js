import * as S from './container.styled';

const Container = (props) => {
    return(
        <S.Wrapper>
            {props.children}
        </S.Wrapper>
    );
}

export default Container;