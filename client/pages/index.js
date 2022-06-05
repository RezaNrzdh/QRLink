import Link from 'next/link';
import {UserAgent} from 'lib/useragent';
import { useEffect, useState } from 'react';
import {DesktopLayout, MobileLayout} from 'components/layouts/layout'

const IndexPage = () => {

    const [device, setDevice] = useState(null);

    useEffect(() => {
        setDevice(UserAgent());
    },[]);

    return (
        <>
            {
                (device == 'Desktop')
                    ?
                    <DesktopLayout>
                        <h1>Home Page</h1>
                        <p>Lorem ipsum dolor esmit, device detected is {device}</p>
                        <Link href='about'><button>Go to about page</button></Link>
                        <Link href='contact'><button>Go to contact page</button></Link>   
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