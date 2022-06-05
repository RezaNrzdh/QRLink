import Link from 'next/link';
import {UserAgent} from 'lib/useragent';
import { useEffect, useState } from 'react';

const IndexPage = () => {

    const [device, setDevice] = useState(null);

    useEffect(() => {
        console.log(navigator.userAgent);
        setDevice(UserAgent());
    });

    return (
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor esmit, device detected is {device}</p>
            <Link href='about'><button>Go to about page</button></Link>
            <Link href='contact'><button>Go to contact page</button></Link>                
        </>
    );
}

export default IndexPage;