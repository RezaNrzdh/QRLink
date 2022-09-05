import {Fragment} from "react";

const ExamplePage = () => {
    return (
        <Fragment>
            <HeaderComponent />
            <section style={{ display: 'flex'}}>
                <SideComponent />
                <MainComponent />
            </section>
            <FooterComponent />
        </Fragment>
    )
}

const HeaderComponent = () => {
    return <header>Header</header>
}

const FooterComponent = () => {
    return <footer>Footer</footer>
}

const SideComponent = () => {
    return <dic>Side</dic>
}

const MainComponent = () => {
    return <div>Main Section</div>
}

export default ExamplePage;