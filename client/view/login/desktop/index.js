import Link from 'next/link';
import Container from "hoc/container";
import * as S from './index.styled';
import {Button, Textfield} from 'components/index';

export const LoginPageDesktop = () => {
    return(
        <S.Background>
            <Container>
                <S.FormWrapper>
                    <S.Title>
                        <h1>ورود با شماره تلفن همراه</h1>
                        <label>خوش اومدی؛ لطفا اطلاعاتتو وارد کن.</label>
                    </S.Title>
                    <Textfield label='شماره تلفن همراه' placeholder='مثال: 09371360717' type='tel' />
                    <Textfield label='رمز عبور' type='password' marginbottom={16}/>
                    <S.ForgetPassword>
                        <Link href='#'><a className='link'>رمزتو فراموش کردی؟</a></Link>
                    </S.ForgetPassword>
                    <Button variant='contained' colors='primary'>ورود به پنل کاربری</Button>
                </S.FormWrapper>
                <S.HeroWrapper>
                    H    
                </S.HeroWrapper>
            </Container>            
        </S.Background>
    );
}