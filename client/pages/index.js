import Link from 'next/link';

const IndexPage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor esmit</p>
            <Link href='about'><button>Go to about page</button></Link>
            <Link href='contact'><button>Go to contact page</button></Link>                
        </>
    );
}

export default IndexPage;