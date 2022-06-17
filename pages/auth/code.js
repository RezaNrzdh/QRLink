import {useContext} from 'react';
import {useRouter} from 'next/router';

import {deviceContext} from 'context/isMobile';
import {OTPCodeDesktop, OTPCodeMobile} from 'view/otpcode';

const OTPCode = ({data}) => {
    
    console.log(data);
    const router = useRouter();
    const{isMobile} = useContext(deviceContext);

    return isMobile === true
        ? <OTPCodeMobile mobile={router.query.mobile} />
        : <OTPCodeDesktop mobile={router.query.mobile} />
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