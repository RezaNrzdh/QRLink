import {useContext} from 'react';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Axios from 'axios';
import {mainContext} from 'provider/mainContext';

const Desktop = dynamic(() => import('components/view/register/desktop'));
const Mobile  = dynamic(() => import('components/view/register/mobile'));

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

            console.log(createUser);
            MobileNumberHandler(createUser.data.data.mobile);
            
            router.push('/code');
        }
        else {
            console.log('Wrong...!');
        }
    }



    return isMobile === true
        ? <Mobile click={onSubmitButtonHandler} />
        : <Desktop click={onSubmitButtonHandler} />;
}

export default RegisterPage;