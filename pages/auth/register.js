import {useContext} from 'react';
import {useRouter} from 'next/router';
import Axios from 'axios';

import {deviceContext} from 'context/isMobile';
import {RegisterPageDesktop, RegisterPageMobile} from 'view/register';


const RegisterPage = () => {

    const router = useRouter();
    const{isMobile} = useContext(deviceContext);

    const onSubmitButtonHandler = async (event) => {        
        event.preventDefault();

        const mobile   = event.target.phone.value;
        const checked = event.target.checkbox.checked;

        if(phone !== null && checked === true){
           const createUser = await Axios.post('/api/auth/register',{ 
               mobile: mobile
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