import {useContext} from 'react';

import {mainContext} from 'context/mainContext';
import {OTPCodeDesktop, OTPCodeMobile} from 'view/otpcode';

const OTPCode = ({data}) => {
    
<<<<<<< HEAD
    const{isMobile, mobileNumber, MobileNumberHandler} = useContext(mainContext);
=======
    console.log(data);
    const router = useRouter();
    const{isMobile} = useContext(deviceContext);
>>>>>>> dfb122462da33a6b98899c1fa578abe40d620c02

    return isMobile === true
        ? <OTPCodeMobile mobileNumber={mobileNumber} MobileNumberHandler={MobileNumberHandler} />
        : <OTPCodeDesktop mobileNumber={mobileNumber} MobileNumberHandler={MobileNumberHandler} />
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx);
    return {
        props:{
            data:{d: 1}
        }
    }
}

export default OTPCode;