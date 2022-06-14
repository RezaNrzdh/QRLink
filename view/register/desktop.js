import Link from 'next/link';
import {AuthLayout} from 'components/layouts/index';
import * as S from './desktop.styled';
import {Button, Icon, Logo, Textfield} from 'components/index';

export const RegisterPageDesktop = (props) => {
    return(
        <AuthLayout>
            <S.Container>
                <S.FormWrapper>
                    <form onSubmit={props.click}>
                        <S.Title>
                            <h1>عضویت با شماره تلفن همراه</h1>
                            <label>خوش اومدی؛ لطفا اطلاعاتتو وارد کن.</label>
                        </S.Title>
                        <Textfield
                            label='شماره تلفن همراه'
                            placeholder='مثال: 09371360717'
                            type='tel'
                            id='phone'
                            name='phone'/>
                        <S.ForgetPassword>
                            <input 
                                type={'checkbox'}
                                name='checkbox'
                                id='checkbox' />
                            <label>شرایط و قوانین سایت هفده را می‌پذیرم.
                            </label>
                        </S.ForgetPassword>
                        <Button
                            as='button'
                            variant='contained'
                            colors='primary'
                            type='submit'>ثبت نام در سایت</Button>
                        <S.DoNotRegisterYet>
                            <label>قبلا عضو شدی؟</label>
                            <Link href='/auth/login'><a className='link'>همین حالا وارد شو</a></Link>
                        </S.DoNotRegisterYet>
                    </form> 
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
            </S.Container>            
        </AuthLayout>
    );
}