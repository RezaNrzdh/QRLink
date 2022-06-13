import {useContext} from 'react';
import { DesktopLayout } from "./desktop/layout";
import { MobileLayout } from "./mobile/layout";
import {deviceContext} from 'context/isMobile';

const Layout = (props) => {

    const{isMobile} = useContext(deviceContext);

    return isMobile === true 
        ? <MobileLayout props={props} /> 
        : <DesktopLayout props={props} />;
}

export default Layout;