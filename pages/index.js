import axios from 'axios';
import { Layout } from 'components';
import Hero from 'components/pages/home/hero';
import Features from 'components/pages/home/features';
import Customers from 'components/pages/home/customers';
import Articles from 'components/pages/home/articles';

const IndexPage = ({customers, articles}) => {
    return(
        <Layout>
            <Hero />
            <Features />
            <Customers customers={customers.data} />
            <Articles articles={articles.data} />
        </Layout>
    );
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