import Link from 'next/link';
import Container from "hoc/container";
import * as S from './index.styled';
import {Button, Icon, Logo, Textfield} from 'components/index';

export const RegisterPageDesktop = () => {
    return(
        <S.Background>
            <Container>
                <S.FormWrapper>
                    <S.Title>
                        <h1>عضویت با شماره تلفن همراه</h1>
                        <label>خوش اومدی؛ لطفا اطلاعاتتو وارد کن.</label>
                    </S.Title>
                    <Textfield label='شماره تلفن همراه' placeholder='مثال: 09371360717' type='tel' />
                    <Textfield label='رمز عبور' type='password' marginbottom={16}/>
                    <S.ForgetPassword>
                        <input type={'checkbox'} />
                        <label>شرایط و قوانین سایت هفده را می‌پذیرم.
                        </label>
                    </S.ForgetPassword>
                    <Button variant='contained' colors='primary'>ثبت نام در سایت</Button>
                    <S.DoNotRegisterYet>
                        <label>قبلا عضو شدی؟</label>
                        <Link href='/auth/login'><a className='link'>همین حالا وارد شو</a></Link>
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