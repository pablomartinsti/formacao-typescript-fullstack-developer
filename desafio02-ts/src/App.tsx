import { ChakraProvider, Box } from '@chakra-ui/react';

import Card from './components/Card';
import Header from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Header />
        <Card />
      </Box>
    </ChakraProvider>
  );
}

export default App;
