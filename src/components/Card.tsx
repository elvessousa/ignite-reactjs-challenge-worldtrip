import { Box, Heading, Image } from '@chakra-ui/react';

type Item = {
  position: number;
  city: string;
  image: string;
  country: string;
  arrivals: number;
  continent: string;
  slug?: string;
};

type CardProps = {
  item: Item;
};

export function Card({ item }: CardProps) {
  return (
    <Box
      bg="white"
      borderRadius="4"
      pb="4"
      border="1px solid #eee"
      overflow="hidden"
    >
      <Image
        src={item.image}
        alt={item.city}
        mb="4"
        w="100%"
        h="150px"
        objectFit="fill"
      />
      <Heading as="strong" px="4" pt="4" fontSize="16" m={0}>
        {item.city}
      </Heading>
      <Box as="p" px="4">
        {item.country}
      </Box>
    </Box>
  );
}
