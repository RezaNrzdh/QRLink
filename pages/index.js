import {useContext, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {mainContext} from 'provider/mainContext';
import axios from 'axios';

const Desktop = dynamic(() => import('components/view/home/desktop'));
const Mobile  = dynamic(() => import('components/view/home/mobile'));

const IndexPage = ({customers}) => {
    const {isMobile} = useContext(mainContext);

    return isMobile === true
        ? <Mobile />
        : <Desktop customers={customers.data} />
}

export const getStaticProps  = async (context) => {
    const {data} = await axios.get(`${process.env.HOSTNAME}/api/customer`);
    
    return {
        props: {
            customers: data
        }
    }
}

export default IndexPage;