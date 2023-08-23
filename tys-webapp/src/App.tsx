import { ChakraProvider } from '@chakra-ui/react';
import type { FC } from 'react';

import AppRouter from './routes';
import './App.scss';

const App: FC = () => (
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);

export default App;
