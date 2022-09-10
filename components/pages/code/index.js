import react, { useEffect, useRef, useState } from 'react';
import {useRouter} from 'next/router';
import * as S from './index.styled';
import {Button} from 'components';



const CodeComponent = (props) => {
    const router = useRouter();
    let NextInput = useRef([]);
    const [countdown, setCountdown] = useState(120);

    // If mobile number doesn't exist, redirect to the Register page.
    //--------------------------------------------------------------
    useEffect(() => {
        if(props.mobileNumber === 0){
            router.push('/register');
        }
    });


    // Countdown used for OTP
    //----------------------
    useEffect(() => {
        if (countdown <= 0 ) return;

        const interval = setInterval(() => {
            setCountdown(countdown-1);
        },1000);
        
        return () => clearInterval(interval);
    },[countdown])


    // Auto Focus on Inputs
    //---------------------
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


    // Resend OTP request
    //-------------------
    const ResetOTP = () => {
        setCountdown(120);
        props.resendOTP();
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
                    {
                        countdown > 0
                            ?
                            <>
                                <label>ارسال مجدد کد یکبار مصرف</label>
                                <label className='indent'>({countdown} ثانیه)</label>                        
                            </>
                            :
                            <>
                                <a onClick={ResetOTP} className='link'>ارسال مجدد کد یکبار مصرف</a>                        
                            </>                            
                    }
                </S.Resend>
            </form>
        </S.Container>
    );
}

export default CodeComponent;