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
        msg: null
    });

    const onCheckNumber = async (event) => {
        event.preventDefault();
;
        let digit = '';

        for(let i=0; i < event.target.length - 1; i++){
            digit += event.target[i].value;
        }

        await Axios.post("/api/auth/code",{
            mobile: mobileNumber,
            otp: parseInt(digit)
        });
    } 

    return (
        <AuthLayout>
            <Alert visible={alertMessage.visible} type="success" msg={alertMessage.msg} />
            <CodeComponent
                click={onCheckNumber}
                msg={setAlertMessage}
                mobileNumber={mobileNumber} 
                MobileNumberHandler={MobileNumberHandler} />
        </AuthLayout>
    )
}

export default CodePage;