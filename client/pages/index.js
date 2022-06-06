import Link from 'next/link';
import {UserAgent} from 'lib/useragent';
import { useEffect, useState } from 'react';
import Container from 'hoc/container';
import Layout from 'components/layouts';

const IndexPage = () => {

    const [device, setDevice] = useState('Desktop');

    useEffect(() => {
        setDevice(UserAgent());
        console.log(UserAgent());
    },[]);

    return (
        <Layout>
            <Container>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor esmit, device detected is {device}</p>
                <Link href='about'><button>Go to about page</button></Link>
                <Link href='contact'><button>Go to contact page</button></Link>   
            </Container>
        </Layout>
    );
}

export default IndexPage;