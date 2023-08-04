'use client';

import { Container, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Details from './details';
import Cart from './cart';

export default function Home() {
  return (
    <Container position='relative' maxW='container.xl' p={0}>
      <ColorModeSwitcher position='absolute' top={5} right={5} />
      <Flex h='100vh' py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
