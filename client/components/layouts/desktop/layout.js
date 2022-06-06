import {DesktopHeader} from 'components/ui/header';
import {DesktopFooter} from 'components/ui/footer';
import {} from 'components/ui/footer';

export const DesktopLayout = ({props}) => {
    return(
        <>
            <DesktopHeader />
            {props.children}
            <DesktopFooter />
        </>
    );
}