import {useContext, useState} from 'react';
import {useRouter} from 'next/router';
import Axios from 'axios';
import {mainContext} from 'provider/mainContext';
import RegisterComponent from "components/pages/register"
import { AuthLayout } from 'components';
import Alert from 'components/ui/alert/alert';

const RegisterPage = () => {
    const router = useRouter();
    const{isMobile, MobileNumberHandler} = useContext(mainContext);
    const [alertMessage, setAlertMessage] = useState({
        visible: false,
        type: "info",
        msg: null
    });

    const onSubmitButtonHandler = async (event) => {        
        event.preventDefault();

        const mobile   = event.target.phone.value;
        const checked  = event.target.checkbox.checked;

        if(mobile && checked){
            const createUser = await Axios.post('/api/auth/register',{ 
                mobile: mobile
            });

            if(createUser.data.status === "created"){
                MobileNumberHandler(createUser.data.mobile);
                router.push("/code");
            }

            if(createUser.data.status === "limited"){
                setAlertMessage({
                    visible: true,
                    type: "danger",
                    msg: "تعداد تلاش های ناموفق شما بیش از حد است، لطفا ساعاتی دیگر مجددا تلاش کنید"
                });
                return null;
            }

            if(createUser.data.status === "attempt"){
                MobileNumberHandler(createUser.data.mobile);
                router.push("/code");
            }

            if(createUser.data.status === "done"){
                router.push("/login");  
            }
        }
        else{
            setAlertMessage({
                visible: true,
                type: "info",
                msg: "لطفا شماره تماس را پر کرده و تیک موافقت با قوانین را بزنید"
            });
        }
    }

    const CloseAlertBox = () => {
        setAlertMessage({
            ...alertMessage,
            visible: false
        });
    }

    return (
        <AuthLayout>
            <Alert 
                click={CloseAlertBox}
                visible={alertMessage.visible} 
                type={alertMessage.type} 
                msg={alertMessage.msg} />
            <RegisterComponent click={onSubmitButtonHandler} />
        </AuthLayout>
    )
}

export default RegisterPage;