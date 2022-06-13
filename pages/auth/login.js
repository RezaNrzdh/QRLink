import {useContext, useEffect} from 'react';
import {deviceContext} from 'context/isMobile';
import {LoginPageDesktop, LoginPageMobile} from 'view/login/index';

const LoginPage = () => {
    console.log(11);
    const {isMobile} = useContext(deviceContext);
    console.log(22);
    return isMobile === true
        ? <LoginPageMobile />
        : <LoginPageDesktop />
}

export default LoginPage;