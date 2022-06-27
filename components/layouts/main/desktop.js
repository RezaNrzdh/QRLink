import {DesktopHeader} from 'components/header';
import {DesktopFooter} from 'components/footer';

export const DesktopLayout = ({props}) => {
    return(
        <>
            <DesktopHeader />
            {props.children}
            <DesktopFooter />
        </>
    );
}