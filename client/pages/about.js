import Link from 'next/link';

const AboutPage = () => {
    return(
        <>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor esmit</p>
            <Link href='./'><button>Go to home page</button></Link>
            <Link href='contact'><button>Go to contact page</button></Link>      
        </>
    );
}

export default AboutPage;