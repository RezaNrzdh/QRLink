import {useContext} from 'react';
import {deviceContext} from 'context/isMobile';
import {LoginPageDesktop, LoginPageMobile} from 'view/login/index';

const LoginPage = () => {
    
    const{isMobile} = useContext(deviceContext);
    
    return isMobile === true
        ? <LoginPageMobile />
        : <LoginPageDesktop />
}

export default LoginPage;