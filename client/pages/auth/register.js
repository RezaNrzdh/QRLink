import {useContext} from 'react';
import {deviceContext} from 'context/isMobile';
import {RegisterPageDesktop, RegisterPageMobile} from 'view/register/index';

const RegisterPage = () => {

    const{isMobile} = useContext(deviceContext);

    return isMobile === true
        ? <RegisterPageMobile />
        : <RegisterPageDesktop />;
}

export default RegisterPage;