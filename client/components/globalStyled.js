import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
        padding: 0;
        margin: 0;
        height: 100%;
        direction: rtl;
        font-family: VazirMatnFont;
    }

    a, button {
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    ul{
        padding: 0;
        margin: 0;
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Light.ttf') format('ttf');
        font-weight: 300;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Regular.ttf') format('ttf');
        font-weight: 400;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;        
    }    

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Medium.ttf') format('ttf');
        font-weight: 500;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Bold.ttf') format('ttf');
        font-weight: 700;
        font-style: normal;        
    }

    @font-face {
        font-family: VazirMatnFont;
        src: url('./fonts/Vazirmatn-UI-FD-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;        
    } 
`;