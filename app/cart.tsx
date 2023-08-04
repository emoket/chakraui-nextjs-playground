import {
  Heading,
  VStack,
  Text,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react';

const formatCurrenty = (amount: number, locale: string, currency: string) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

export default function Cart() {
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      // bg='gray.200'
    >
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>장바구니</Heading>
        <Text>담겨진 목록을 확인하신 후 결제하시기 바랍니다.</Text>
      </VStack>
      <HStack spacing={6} alignItems='center' w='full'>
        <Heading size='2xl'>🍅</Heading>
        <Stack
          spacing={0}
          w='full'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <VStack w='full' spacing={0} alignItems='flex-start'>
            <Heading size='md'>토마토</Heading>
            <Text color='gray.600'>SJ23D3746S</Text>
          </VStack>
          <Heading size='sm' textAlign='end'>
            {formatCurrenty(123456, 'ko-KR', 'KRW')}
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems='stretch' w='full'>
        <HStack justifyContent='space-between'>
          <Text color='gray.600'>상품 합계</Text>
          <Heading size='sm'>{formatCurrenty(123456, 'ko-KR', 'KRW')}</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color='gray.600'>배송료</Text>
          <Heading size='sm'>{formatCurrenty(3000, 'ko-KR', 'KRW')}</Heading>
        </HStack>
        <HStack justifyContent='space-between'>
          <Text color='gray.600'>부가세</Text>
          <Heading size='sm'>{formatCurrenty(1234, 'ko-KR', 'KRW')}</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent='space-between'>
          <Text color='gray.600'>총 합계</Text>
          <Heading size='lg'>{formatCurrenty(1234, 'ko-KR', 'KRW')}</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
}
