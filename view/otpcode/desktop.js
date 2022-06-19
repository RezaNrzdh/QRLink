import react, { useEffect, useRef, useMemo } from 'react';
import {useRouter} from 'next/router';
import * as S from './desktop.styled';

import {AuthLayout} from 'components/layouts';
import {Button} from 'components';

export const OTPCodeDesktop = (props) => {

    const router = useRouter();
    let NextInput = useRef([]);

    useEffect(() => {
        if(props.mobileNumber === 0){
            router.push('/auth/register');
        }
    })

    const FocusHanlder = (event) => {
        console.log(event.target.value);
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
        <AuthLayout>
            <S.Container>
                <S.Title>
                    <h1>احراز هویت</h1>
                    <label>کد تایید ارسال شده به شماره {props.mobileNumber} را وارد کنید.</label>               
                </S.Title>
                <S.Otp>
                    {
                        [0,1,2,3,4,5].map((index) => {
                            return <input
                                name={index}
                                key={index}
                                type={'tel'}
                                maxLength={1}
                                min={0}
                                max={9}
                                onChange={FocusHanlder}
                                autoComplete='off'
                                ref={NextInput.current[index] = react.createRef()}
                                />
                        })
                    }
                </S.Otp>
                <S.Error>کد وارد شده اشتباه است، لطفا مجددا تلاش کنید.</S.Error>
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
            </S.Container>
        </AuthLayout>
    );
}