import {GlobalStyle} from 'components/globalStyled';
import MainProvider from 'context/mainContext';

function App({Component, pageProps}) {
    return (
        <MainProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </MainProvider>
    );
}

export default App;