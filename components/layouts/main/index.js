import {useContext} from 'react';
import { DesktopLayout } from "./desktop";
import { MobileLayout } from "./mobile";
import {mainContext} from 'context/mainContext';

export const Layout = (props) => {

    const{isMobile} = useContext(mainContext);

    return isMobile === true 
        ? <MobileLayout props={props} /> 
        : <DesktopLayout props={props} />;
}