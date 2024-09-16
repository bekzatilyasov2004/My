import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';

import Layout from './Layout';

function App() {
  const { colorMode, setColorMode } = useColorMode();

  React.useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return (

    <Box className='body'>
      <Layout />
    </Box>

  );
}

export default App;
