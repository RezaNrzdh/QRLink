import Link from 'next/link';
import {UserAgent} from 'lib/useragent';
import { useEffect, useState } from 'react';
import {DesktopLayout, MobileLayout} from 'components/layouts/layout'
import Container from 'hoc/container';

const IndexPage = () => {

    const [device, setDevice] = useState('Desktop');

    useEffect(() => {
        setDevice(UserAgent());
        console.log(UserAgent());
    },[]);

    return (
        <>
            {
                (device == 'Desktop')
                    ?
                    <DesktopLayout>
                        <Container>
                            <h1>Home Page</h1>
                            <p>Lorem ipsum dolor esmit, device detected is {device}</p>
                            <Link href='about'><button>Go to about page</button></Link>
                            <Link href='contact'><button>Go to contact page</button></Link>   
                        </Container>
                    </DesktopLayout>
                    :
                    <MobileLayout>
                        <h1>Home Page</h1>
                        <p>Lorem ipsum dolor esmit, device detected is {device}</p>
                        <Link href='about'><button>Go to about page</button></Link>
                        <Link href='contact'><button>Go to contact page</button></Link>                         
                    </MobileLayout>
            }        
        </>
    );
}

export default IndexPage;