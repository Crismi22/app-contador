import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        backgroundImage: 'linear-gradient(to right, #061161, #780206)',
      },
    },
  },
});

export default theme;
