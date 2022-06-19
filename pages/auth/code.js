import {useContext} from 'react';

import {mainContext} from 'context/mainContext';
import {OTPCodeDesktop, OTPCodeMobile} from 'view/otpcode';

const OTPCode = ({data}) => {
    
    const{isMobile, mobileNumber, MobileNumberHandler} = useContext(mainContext);

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