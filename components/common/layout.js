import {useContext} from 'react';
import {mainContext} from 'provider/mainContext';
import {DesktopHeader, MobileHeader} from 'components/header';
import {DesktopFooter, MobileFooter} from 'components/footer';

export const Layout = (props) => {

    const{isMobile} = useContext(mainContext);

    return isMobile === true 
        ?
            <>
                <MobileHeader />
                { props.children }
                <MobileFooter /> 
            </>
        :
            <>
                <DesktopHeader />
                { props.children }
                <DesktopFooter /> 
            </>       
        ;
}