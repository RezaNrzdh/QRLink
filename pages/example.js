import {Fragment} from "react";

const ExamplePage = (props) => {
    return (
        <Fragment>
            <header>header</header>
            <section style={{ display: 'flex'}}>
                <div>side</div>
                <div>{props.d.name}</div>
            </section>
            <button>ADD NUMBER</button>
            <footer>footer</footer>
        </Fragment>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/test');
    const data = await response.json();

    return {
        props: {
            d: data
        }
    }
}

export default ExamplePage;