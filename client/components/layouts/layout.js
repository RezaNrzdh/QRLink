import {DesktopHeader, MobileHeader, DesktopFooter, MobileFooter} from 'components/index';

export const DesktopLayout = (props) => {
    return(
        <>
            <DesktopHeader />
            {props.children}
            <DesktopFooter />
        </>
    );
}

export const MobileLayout = (props) => {
    return(
        <>
            <MobileHeader />
            {props.children}
            <MobileFooter />
        </>
    );
}