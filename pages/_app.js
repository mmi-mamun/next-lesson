import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Next Lesson</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
