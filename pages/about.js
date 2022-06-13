import {useEffect} from 'react';
import Layout from 'components/layouts';
import Container from 'hoc/container';
import Link from 'next/link';
import Axios from 'axios';

const AboutPage = () => {

    useEffect(() => {
        getResponce();
    },[]);

    const getResponce = async () => {
        const d = await Axios.post('api/test');
        console.log(d);
    }

    return(
        <Layout>
            <Container>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor esmit</p>
                <Link href='./'><button>Go to home page</button></Link>
                <Link href='contact'><button>Go to contact page</button></Link>  
            </Container>    
        </Layout>
    );
}

export default AboutPage;