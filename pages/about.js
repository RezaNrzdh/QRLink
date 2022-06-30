import {useEffect} from 'react';
import {Layout} from 'components/layouts/main';
import Container from 'hoc/container';
import Link from 'next/link';

import { OutlinedButton } from 'components/button/outlinedButton';

const AboutPage = () => {

    return(
        <Layout>
            <Container>
                <h1>About Page</h1>
                <p>Lorem ipsum dolor esmit</p>
                <Link href='/'><button>Go to home page</button></Link>
                <Link href='/contact'><button>Go to contact page</button></Link>
                <OutlinedButton disabled color='dark'>sadadad</OutlinedButton>
            </Container>    
        </Layout>
    );
}

export default AboutPage;