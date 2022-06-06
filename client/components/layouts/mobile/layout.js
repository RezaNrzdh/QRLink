import {MobileHeader} from 'components/ui/header';
import {MobileFooter} from 'components/ui/footer';
import {} from 'components/ui/footer';

export const MobileLayout = (props) => {
    return(
        <>
            <MobileHeader />
            {props.children}
            <MobileFooter />
        </>
    );
}