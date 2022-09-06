import {useContext} from 'react';
import {useRouter} from 'next/router';
import Axios from 'axios';
import {mainContext} from 'provider/mainContext';
import RegisterComponent from "components/pages/register"
import { AuthLayout } from 'components';

const RegisterPage = () => {

    const router = useRouter();
    const{isMobile, MobileNumberHandler} = useContext(mainContext);

    const onSubmitButtonHandler = async (event) => {        
        event.preventDefault();

        const mobile   = event.target.phone.value;
        const checked  = event.target.checkbox.checked;

        if(phone !== null && checked === true){            
            const createUser = await Axios.post('/api/auth/register',{ 
                mobile: mobile
            });

            if(createUser.data.success){
                MobileNumberHandler(createUser.data.mobile);
                router.push('/code');
            }
            else{
                router.push('/login');
            }
        }
        else {
            console.log('please fill mobile number and checked condition and rules')
        }
    }

    return (
        <AuthLayout>
            <RegisterComponent />
        </AuthLayout>
    );
}

export default RegisterPage;