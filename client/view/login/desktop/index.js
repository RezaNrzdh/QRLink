import Layout from "components/layouts";
import Container from "hoc/container";
import * as S from './index.styled';
import {Textfield} from 'components/index';

export const LoginPageDesktop = () => {
    return(
        <S.Background>
            <Container>
                <S.FormWrapper>
                    <S.Title>
                        <h1>ورود با شماره تلفن همراه</h1>
                        <label>خوش اومدی؛ لطفا اطلاعاتتو وارد کن.</label>
                    </S.Title>
                    <Textfield width={327} label='شماره تلفن همراه' placeholder='مثال: 09371360717' />
                </S.FormWrapper>
                <S.HeroWrapper>
                    H    
                </S.HeroWrapper>
            </Container>            
        </S.Background>
    );
}