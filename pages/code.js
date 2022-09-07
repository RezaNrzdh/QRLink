import {useContext} from 'react';
import {mainContext} from 'provider/mainContext';
import CodeComponent from 'components/pages/code';
import { AuthLayout } from 'components';
import Axios from 'axios';

const CodePage = () => {
    const{mobileNumber, MobileNumberHandler} = useContext(mainContext);

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
            <CodeComponent
                click={onCheckNumber} 
                mobileNumber={mobileNumber} 
                MobileNumberHandler={MobileNumberHandler} />
        </AuthLayout>
    )
}

export default CodePage;