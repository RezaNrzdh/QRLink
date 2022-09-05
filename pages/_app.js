import {GlobalStyle} from 'lib/globalStyled';
import MainProvider from 'provider/mainContext';

function App({Component, pageProps}) {
    return (
        <MainProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </MainProvider>
    );
}

export default App;