import {GlobalStyle} from 'utils/globalStyled';
import MainProvider from 'context/mainContext';

function App({Component, pageProps}) {
    console.log('App');
    return (
        <MainProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </MainProvider>
    );
}

export default App;