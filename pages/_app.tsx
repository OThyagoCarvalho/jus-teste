import '../styles/globals.scss' ;
import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider disableBaseline={true}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </NextUIProvider>
    );
}

export default MyApp;
