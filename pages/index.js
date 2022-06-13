import {useContext} from 'react';
import Link from 'next/link';
import Container from 'hoc/container';
import Layout from 'components/layouts';
import {deviceContext} from 'context/isMobile';

const IndexPage = () => {

    const {isMobile} = useContext(deviceContext);

    return (
        <Layout>
            <Container>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor esmit, device detected is</p>
                <Link href='about'><button>Go to about page</button></Link>
                <Link href='contact'><button>Go to contact page</button></Link>   
            </Container>
        </Layout>
    );
}

export default IndexPage;