import {useContext} from 'react';
import dynamic from 'next/dynamic';
import {mainContext} from 'provider/mainContext';

const Desktop = dynamic(() => import('components/view/home/desktop'));
const Mobile  = dynamic(() => import('components/view/home/mobile'));

const IndexPage = () => {

    const {isMobile} = useContext(mainContext);

    return isMobile === true
        ? <Mobile />
        : <Desktop />
}

export default IndexPage;