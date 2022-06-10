import Head from 'next/head'
import '../styles/globals.css'

import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Julien ANQUETIL</title>
        <meta name="description" content="CV de Julien Anquetil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
