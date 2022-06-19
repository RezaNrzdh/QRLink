import { UserAgent } from 'lib/useragent';
import {createContext, useEffect, useState} from 'react';

export const mainContext = createContext();

const MainProvider = (props) => {

    const [isMobile, setIsMobile] = useState();
    const [mobileNumber, setMobileNumber] = useState(0);

    useEffect(() => {
        setIsMobile(UserAgent());
    });

    const MobileNumberHandler = (number) => {
        setMobileNumber(number);
    }

    return(
        <mainContext.Provider value={{
            isMobile,
            mobileNumber,
            MobileNumberHandler
        }}>
            {props.children}
        </mainContext.Provider>
    );
}

export default MainProvider;