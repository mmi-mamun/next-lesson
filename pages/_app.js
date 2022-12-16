import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'bumblebee');
  }, [])
  return <>
    <Head>
      <title>Next Lesson</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
