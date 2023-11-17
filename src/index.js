import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import globalStyles from './globalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={globalStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
