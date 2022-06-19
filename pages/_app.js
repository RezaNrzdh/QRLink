import {GlobalStyle} from 'components/globalStyled';
<<<<<<< HEAD
import MainProvider from 'context/mainContext';
=======
import DeviceProvider from 'context/isMobile';
import {useState} from 'react';
>>>>>>> dfb122462da33a6b98899c1fa578abe40d620c02

function App({Component, pageProps}) {
    return (
        <MainProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </MainProvider>
    );
}

export default App;