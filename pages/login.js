import {useContext, useEffect} from 'react';
import {mainContext} from 'provider/mainContext';
import {LoginPageDesktop, LoginPageMobile} from 'view/login/index';

const LoginPage = () => {
    console.log(11);
    const {isMobile} = useContext(mainContext);
    console.log(22);
    return isMobile === true
        ? <LoginPageMobile />
        : <LoginPageDesktop />
}

export default LoginPage;