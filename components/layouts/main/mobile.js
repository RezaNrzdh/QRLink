import {MobileHeader} from 'components/header';
import {MobileFooter} from 'components/footer';
import {} from 'components/footer';

export const MobileLayout = ({props}) => {
    return(
        <>
            <MobileHeader />
            {props.children}
            <MobileFooter />
        </>
    );
}