import * as S from './index.styled';

export const AuthLayout = (props) => {
    return(
        <S.Background>
            {props.children}
        </S.Background>
    );
}

