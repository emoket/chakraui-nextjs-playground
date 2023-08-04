'use client';

import { Container, Flex, VStack } from '@chakra-ui/react';
import Details from './details';
import Cart from './cart';

export default function Home() {
  return (
    <Container maxW='container.xl' p={0}>
      <Flex h='100vh' py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
