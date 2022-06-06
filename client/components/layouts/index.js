import {useContext} from 'react';
import { DesktopLayout } from "./desktop/layout";
import { MobileLayout } from "./mobile/layout";
import {deviceContext} from 'context/isMobile';

const Layout = () => {

    const{isMobile} = useContext(deviceContext);

    return isMobile === true 
        ? <MobileLayout /> 
        : <DesktopLayout />;
}

export default Layout;