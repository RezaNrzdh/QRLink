import { Layout } from "components/common/layout";
import Hero from './hero';
import Features from "./features";
import Customers from "./customers";
import Articles from "./articles";
import Container from "hoc/container";

const Desktop = () => {
    return(
        <Layout>
            <Hero />
            <Container column>
                <Features />
                <Customers />
                <Articles />
            </Container>
        </Layout>
    );
}

export default Desktop;