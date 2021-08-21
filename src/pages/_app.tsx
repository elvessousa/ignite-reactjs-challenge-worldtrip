import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { wtTheme } from '../../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>
      <ChakraProvider theme={wtTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
