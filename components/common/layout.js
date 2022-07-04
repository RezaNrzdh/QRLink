import {useContext} from 'react';
import {mainContext} from 'context/mainContext';
import {DesktopHeader} from 'components/header';
import {DesktopFooter} from 'components/footer';
import {MobileHeader} from 'components/header';
import {MobileFooter} from 'components/footer';

export const Layout = (props) => {

    const{isMobile} = useContext(mainContext);

    return isMobile === true 
        ? <MobileLayout children={props.children} /> 
        : <DesktopLayout children={props.children} />;
}

const DesktopLayout = ({children}) => {
    return(
        <>
            <DesktopHeader />
            {children}
            <DesktopFooter />
        </>
    );
}

const MobileLayout = ({children}) => {
    return(
        <>
            <MobileHeader />
            {children}
            <MobileFooter />
        </>
    );
}