import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import LoginComponent from 'src/Components/Login';

const Login = (): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height='100vh' alignItems='center'>
      {!isMobile && (
        <Box width='40%' bg='gray.200' padding='4' height='100%'>
          <div>
            <h1>Presentation</h1>
          </div>
        </Box>
      )}
      <Box width={isMobile ? '100%' : '60%'} padding='4'>
        <LoginComponent />
      </Box>
    </Flex>
  );
};

export default Login;
