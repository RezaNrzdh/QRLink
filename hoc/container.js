import * as S from './container.styled';

const Container = (props) => {
    return(
        <S.Wrapper
            column = { props.column }
            between = { props.between }
            center = { props.center }
            middle = { props.middle }
        >
            {props.children}
        </S.Wrapper>
    );
}

export default Container;