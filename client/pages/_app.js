import {GlobalStyle} from 'components/globalStyled';

function App({Component, pageProps}) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default App;