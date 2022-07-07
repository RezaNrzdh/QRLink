import { Layout } from "components/common/layout";
import Hero from './hero';
import Features from "./features";
import Customers from "./customers/customers";
import Articles from "./articles";

const Desktop = ({customers}) => {
    return(
        <Layout>
            <Hero />
            <Features />
            <Customers customers={customers} />
            <Articles />
        </Layout>
    );
}

export default Desktop;