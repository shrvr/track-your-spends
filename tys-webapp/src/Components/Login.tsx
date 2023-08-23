import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Stack,
  Text,
  Link,
  Divider,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (): boolean => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (): boolean => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handlePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // console.log('Login successful');
    }
  };

  return (
    <Box maxW='md' mx='auto' p={4}>
      <Text fontSize='2xl' fontWeight='bold'>
        Welcome back!
      </Text>
      <Text mb={10} mt={2}>
        Start managing your finance faster and better.
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!emailError}>
            {/* <FormLabel>Email</FormLabel> */}
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon color='blue.500' />
              </InputLeftElement>
              <Input
                type='email'
                value={email}
                placeholder='Your Email'
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
            </InputGroup>
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!passwordError}>
            {/* <FormLabel>Password</FormLabel> */}
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <LockIcon color='blue.500' />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='At least 8 characters'
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <InputRightElement>
                <IconButton
                  variant='ghost'
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handlePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                />
              </InputRightElement>
            </InputGroup>
            <Flex
              justifyContent={passwordError ? 'space-between' : 'flex-end'}
              alignItems='flex-end'
            >
              <FormErrorMessage>{passwordError}</FormErrorMessage>
              <Link as={ReactRouterLink} to='/password_reset' color='blue.500' mt='2'>
                Forgot password?
              </Link>
            </Flex>
          </FormControl>
          <Button type='submit' colorScheme='blue' mt='1'>
            Log In
          </Button>
        </Stack>
      </form>
      <Flex align='center' mt={6}>
        <Divider />
        <Text mx={3} fontWeight='200'>
          or
        </Text>
        <Divider />
      </Flex>
      <Box mt={4} textAlign='center'>
        Don&apos;t you have an account?{' '}
        <Link color='blue.500' fontWeight='bold' as={ReactRouterLink} to='/register'>
          Sign Up
        </Link>
      </Box>
    </Box>
  );
};

export default LoginComponent;
