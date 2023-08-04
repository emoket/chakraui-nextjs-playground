import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from '@chakra-ui/react';

export default function Details() {
  return (
    <VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start'>
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>상세정보</Heading>
        <Text>
          이미 계정이 있는 경우 <strong>로그인</strong>하시기 바랍니다.
        </Text>
      </VStack>
      <SimpleGrid column={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel id='firstName'>이름</FormLabel>
            <Input placeholder='길동' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel id='lastName'>성</FormLabel>
            <Input placeholder='홍' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel id='country'>국가</FormLabel>
            <Select>
              <option value='kr'>대한민국</option>
              <option value='us'>미국</option>
              <option value='de'>독일</option>
              <option value='nl'>네덜란드</option>
              <option value='ae'>아랍에미레이트</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel id='city'>도시</FormLabel>
            <Input placeholder='서울특별시' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel id='address'>나머지 주소</FormLabel>
            <Input placeholder='강남구 도곡동' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>나중에 작성할게요</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size='lg' w='full'>
            주문하기
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}
