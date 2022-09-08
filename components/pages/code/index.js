import react, { useEffect, useRef } from 'react';
import {useRouter} from 'next/router';
import * as S from './index.styled';
import {Button} from 'components';



const CodeComponent = (props) => {

    const router = useRouter();
    let NextInput = useRef([]);

    useEffect(() => {
        if(props.mobileNumber === 0){
            router.push('/register');
        }
    })

    const FocusHandlder = (event) => {
        if(event.target.value !== ''){
            if(event.target.name < 5){
                NextInput.current[parseInt(event.target.name) + 1].current.focus();
            }
        }
        else{
            if(event.target.name > 0){
                NextInput.current[parseInt(event.target.name) - 1].current.focus();
            }
        }
    }

    return(
        <S.Container>
            <S.Title>
                <h1>احراز هویت</h1>
                <label>کد تایید ارسال شده به شماره {props.mobileNumber} را وارد کنید.</label>               
            </S.Title>
            <form onSubmit={props.click}>
                <S.Otp>
                    {
                        [0,1,2,3,4,5].map((index) => {
                            return <input
                                name={index}
                                id={`num${index}`}
                                key={index}
                                type={'tel'}
                                maxLength={1}
                                min={0}
                                max={9}
                                onChange={FocusHandlder}
                                autoComplete='off'
                                ref={NextInput.current[index] = react.createRef()}
                                />
                        })
                    }
                </S.Otp>
                <Button
                    as='button'
                    variant='contained'
                    colors='primary'
                    type='submit'>
                        بررسی کد تایید
                </Button>
                <S.Resend>
                    <a className='link'>ارسال مجدد کد یکبار مصرف</a>
                    <label></label>
                </S.Resend>
            </form>
        </S.Container>
    );
}

export default CodeComponent;