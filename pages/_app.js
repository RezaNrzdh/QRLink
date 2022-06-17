import {GlobalStyle} from 'components/globalStyled';
import DeviceProvider from 'context/isMobile';
import {useState} from 'react';

function App({Component, pageProps}) {
    return (
        <DeviceProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </DeviceProvider>
    );
}

export default App;