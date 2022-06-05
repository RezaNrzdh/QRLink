import {DesktopHeader, DesktopFooter} from 'components/index';

const DesktopLayout = (props) => {
    return(
        <>
            <DesktopHeader />
            {props.children}
            <DesktopFooter />
        </>
    );
}

export default DesktopLayout;