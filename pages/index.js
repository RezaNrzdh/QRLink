import {useContext} from 'react';
import dynamic from 'next/dynamic';
import {mainContext} from 'provider/mainContext';
import axios from 'axios';

const Desktop = dynamic(() => import('components/pages/home'));
const Mobile  = dynamic(() => import('components/view/home/mobile'));

const IndexPage = ({customers, articles}) => {
    const {isMobile} = useContext(mainContext);

    return isMobile === true
        ? <Mobile />
        : <Desktop customers={customers.data} articles={articles.data} />
}

export const getStaticProps  = async (context) => {
    const customers = await axios.get(`${process.env.HOSTNAME}/api/customer`);
    const articles = await axios.get(`${process.env.HOSTNAME}/api/article?limit=4`);
    
    return {
        props: {
            customers: customers.data,
            articles: articles.data
        }
    }
}

export default IndexPage;