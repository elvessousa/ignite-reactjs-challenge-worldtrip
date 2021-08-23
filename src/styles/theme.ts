import { extendTheme } from '@chakra-ui/react';

const theme = {
  fonts: {
    heading: 'Work Sans',
    body: 'Work Sans',
  },
  colors: {
    background: '#f5f8fa',
    highlight: '#ffba08',
    black: '#000000',
    white: '#ffffff',
    dark: {
      text: '#47585b',
      info: {
        500: '#999999',
        250: '#cccccc',
      },
    },
    light: {
      text: '#f5f8fa',
      info: {
        500: '#dadada',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background',
      },
    },
  },
};

export const wtTheme = extendTheme(theme);
