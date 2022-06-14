import {DesktopHeader} from 'components/ui/header';
import {DesktopFooter} from 'components/ui/footer';

export const DesktopLayout = ({props}) => {
    return(
        <>
            <DesktopHeader />
            {props.children}
            <DesktopFooter />
        </>
    );
}