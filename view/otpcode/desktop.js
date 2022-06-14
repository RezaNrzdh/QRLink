import {AuthLayout} from 'components/layouts';
import react from 'react';
import { useRef } from 'react';
import * as S from './desktop.styled';

export const OTPCodeDesktop = (props) => {

    let NextInput = useRef([]);

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
                    <label>کد تایید ارسال شده به شماره {props.mobile} را وارد کنید.</label>               
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
                                ref={NextInput.current[index] = react.createRef()}
                                />
                        })
                    }
                </S.Otp>
                <S.Error>کد وارد شده اشتباه است، لطفا مجددا تلاش کنید.</S.Error>
            </S.Container>
        </AuthLayout>
    );
}