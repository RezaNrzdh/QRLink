import { Layout } from "components/shared/layout";
import Hero from './hero';
import Features from "./features";
import Customers from "./customers/customers";
import Articles from "./articles/articles";

const Desktop = ({customers, articles}) => {
    return(
        <Layout>
            <Hero />
            <Features />
            <Customers customers={customers} />
            <Articles articles={articles} />
        </Layout>
    );
}

export default Desktop;