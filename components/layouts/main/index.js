import {useContext} from 'react';
import { DesktopLayout } from "./desktop";
import { MobileLayout } from "./mobile";
import {deviceContext} from 'context/isMobile';

export const Layout = (props) => {

    const{isMobile} = useContext(deviceContext);

    return isMobile === true 
        ? <MobileLayout props={props} /> 
        : <DesktopLayout props={props} />;
}