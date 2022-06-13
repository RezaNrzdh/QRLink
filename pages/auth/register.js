import {useContext} from 'react';
import {deviceContext} from 'context/isMobile';
import {RegisterPageDesktop, RegisterPageMobile} from 'view/register/index';

const RegisterPage = () => {

    const{isMobile} = useContext(deviceContext);

    const onSubmitButtonHandler = (event) => {
        event.preventDefault();
        console.log(event.target.phone.value);
        console.log(event.target.password.value);
        console.log(event.target.checkbox.checked);
    }

    return isMobile === true
        ? <RegisterPageMobile />
        : <RegisterPageDesktop click={onSubmitButtonHandler} />;
}

export default RegisterPage;