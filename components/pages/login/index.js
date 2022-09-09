import Link from 'next/link';
import {Button, Logo, Textfield} from 'components/index';
import {Icon} from 'constants/icon';
import * as S from './index.styled';

const LoginComponent = (props) => {
    return(
        <S.Container>           
            <S.FormWrapper>
                <form onSubmit={props.click}>
                    <S.Title>
                        <h1>ورود با شماره تلفن همراه</h1>
                        <label>خوش اومدی؛ لطفا اطلاعاتتو وارد کن.</label>
                    </S.Title>
                    <Textfield
                        label='شماره تلفن همراه'
                        placeholder='مثال: 09371360717'
                        type='tel'
                        id='phone'
                        name='phone'/>
                    <Button
                        as='button'
                        fullWidth='true'
                        variant='contained'
                        colors='primary'
                        type='submit'>
                            ورود به سایت
                    </Button>
                    <S.DoNotRegisterYet>
                        <label>هنوز عضو نشدی؟</label>
                        <Link href='/register'><a className='link'>همین حالا عضو شو</a></Link>
                    </S.DoNotRegisterYet>
                    <S.HLine />
                    <Link href='/'>
                        <a className='return'>
                            بازگشت به خانه
                            <Icon icon='icon-arrow-left' size={24}/>
                        </a>
                    </Link>
                </form> 
            </S.FormWrapper>                   
        </S.Container>  
    );
}

export default LoginComponent;