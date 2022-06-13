import {useContext} from 'react';
import {deviceContext} from 'context/isMobile';
import {RegisterPageDesktop, RegisterPageMobile} from 'view/register/index';
import Axios from 'axios';
import OTPGenerator from 'lib/otp';

const RegisterPage = () => {

    const{isMobile} = useContext(deviceContext);

    const onSubmitButtonHandler = async (event) => {        
        event.preventDefault();

        const mobile   = event.target.phone.value;
        const checked = event.target.checkbox.checked;
        const otp     = OTPGenerator();

        if(phone !== null && checked === true){
           const createUser = await Axios.post('/api/auth/register',{ 
               mobile: mobile,
               otp: otp,
               otpExpired: Date.now() + 120000
            });

            console.log(createUser);
        }
        else {
            console.log('Wrong...!');
        }
    }

    return isMobile === true
        ? <RegisterPageMobile />
        : <RegisterPageDesktop click={onSubmitButtonHandler} />;
}

export default RegisterPage;