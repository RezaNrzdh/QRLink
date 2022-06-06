import { UserAgent } from 'lib/useragent';
import {createContext, useEffect, useState} from 'react';

export const deviceContext = createContext();

const DeviceProvider = (props) => {

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(UserAgent());
    });

    return(
        <deviceContext.Provider value={{isMobile}}>
            {props.children}
        </deviceContext.Provider>
    );
}

export default DeviceProvider;