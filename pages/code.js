import {useContext, useState} from 'react';
import {mainContext} from 'provider/mainContext';
import { AuthLayout } from 'components';
import Alert from 'components/ui/alert/alert';
import CodeComponent from 'components/pages/code';
import Axios from 'axios';

const CodePage = () => {
    const {mobileNumber, MobileNumberHandler} = useContext(mainContext);
    const [alertMessage, setAlertMessage] = useState({
        visible: false,
        type: "info",
        msg: null
    });
    let digit = '';


    // Collect all 6 inputs, merge them and then send the request to the API
    // and then show alert box.
    //----------------------------------------------------------------------
    const onCheckNumber = async (event) => {
        event.preventDefault();

        for(let i=0; i < event.target.length - 1; i++){
            digit += event.target[i].value;
        }

        const result = await Axios.post("/api/auth/code",{
            mobile: mobileNumber,
            otp: parseInt(digit)
        });

        setAlertMessage({
            visible: true,
            type: result.data.status,
            msg: result.data.msg
        });
    }


    // Close Alert Box
    //----------------
    const CloseAlertBox = () => {
        setAlertMessage({
            ...alertMessage,
            visible: false
        });
    }

    // Resend OTP Request
    //-------------------
    const ResendOTPRequest = async() => {
        await Axios.post('/api/auth/register',{ 
            mobile: mobileNumber
        });
    }

    return (
        <AuthLayout>
            <Alert 
                click={CloseAlertBox}
                visible={alertMessage.visible} 
                type={alertMessage.type} 
                msg={alertMessage.msg} />
            <CodeComponent
                click={onCheckNumber}
                resendOTP={ResendOTPRequest}
                msg={setAlertMessage}
                mobileNumber={mobileNumber} 
                MobileNumberHandler={MobileNumberHandler} />
        </AuthLayout>
    )
}

export default CodePage;