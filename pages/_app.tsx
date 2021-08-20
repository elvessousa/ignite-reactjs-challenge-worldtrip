import { ChakraProvider } from '@chakra-ui/react';
import { wtTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={wtTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
