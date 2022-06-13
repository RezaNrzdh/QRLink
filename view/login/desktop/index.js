import Link from 'next/link';
import Container from "hoc/container";
import * as S from './index.styled';
import {Button, Icon, Logo, Textfield} from 'components/index';

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
                        <input type={'checkbox'} />
                        <label>منو یادت نره!</label>
                        <Link href='#'><a className='link'>رمزتو فراموش کردی؟</a></Link>
                    </S.ForgetPassword>
                    <Button variant='contained' colors='primary'>ورود به پنل کاربری</Button>
                    <S.DoNotRegisterYet>
                        <label>هنوز ثبت نام نکردی؟</label>
                        <Link href='/auth/register'><a className='link'>همین حالا عضو شو</a></Link>
                    </S.DoNotRegisterYet>
                </S.FormWrapper>
                <S.HeroWrapper>
                    <S.Logo>
                        <Logo />
                        <Link href='/'>
                            <a className='return'>
                                بازگشت به خانه
                                <Icon icon='icon-arrow-left' size={24}/>
                            </a>
                        </Link>
                    </S.Logo> 
                </S.HeroWrapper>
            </Container>            
        </S.Background>
    );
}