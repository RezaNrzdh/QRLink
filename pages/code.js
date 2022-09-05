import {useContext} from 'react';
import dynamic from 'next/dynamic';
import {mainContext} from 'provider/mainContext';

const Desktop = dynamic(() => import('components/pages/code'));
const Mobile  = dynamic(() => import('components/view/otpcode/mobile'));

const OTPCode = () => {
    
    const{isMobile, mobileNumber, MobileNumberHandler} = useContext(mainContext);

    return isMobile === true
        ? 
            <Mobile 
                mobileNumber={mobileNumber} 
                MobileNumberHandler={MobileNumberHandler}
            />
        : 
            <Desktop 
                mobileNumber={mobileNumber} 
                MobileNumberHandler={MobileNumberHandler}
            />
}

export default OTPCode;