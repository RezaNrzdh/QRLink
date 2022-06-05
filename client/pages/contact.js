import Link from 'next/link';

const ContactPage = () => {
    return(
        <>
            <h1>Contact Page</h1>
            <p>Lorem ipsum dolor esmit</p>
            <Link href='./'><button>Go to home page</button></Link>
            <Link href='about'><button>Go to about page</button></Link>              
        </>
    );
}

export default ContactPage;