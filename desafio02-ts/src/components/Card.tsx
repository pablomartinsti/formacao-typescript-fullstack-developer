import { Box, Center, Input } from '@chakra-ui/react';
import { login } from '../services/login';
import LoginButton from './Button';

const Card = () => {
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>

      <Input placeholder="email" marginBottom="5px" />
      <Input placeholder="password" type="password" />

      <Center>
        <LoginButton text="Entrar" onClick={login} />
      </Center>
    </Box>
  );
};

export default Card;
