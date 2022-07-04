import {Layout} from 'components/index';
import Container from 'hoc/container';
import Link from 'next/link';

const ContactPage = () => {
    return(
        <Layout>
            <Container>
                <h1>Contact Page</h1>
                <p>Lorem ipsum dolor esmit</p>
                <Link href='./'><button>Go to home page</button></Link>
                <Link href='about'><button>Go to about page</button></Link>      
            </Container>        
        </Layout>
    );
}

export default ContactPage;