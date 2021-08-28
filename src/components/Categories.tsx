import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';

export function Categories() {
  const [isMobile] = useMediaQuery(['(max-width: 720px)']);
  const items = [
    { name: 'vida noturna', icon: 'cocktail' },
    { name: 'praia', icon: 'surf' },
    { name: 'moderno', icon: 'building' },
    { name: 'clássico', icon: 'museum' },
    { name: 'e mais...', icon: 'earth' },
  ];

  return (
    <SimpleGrid columns={[2, 5]} gap="2" m={[5, 10]}>
      {items.map((item) => (
        <Box
          key={item.name}
          d="flex"
          flexDir="column"
          alignItems={['space-between', 'center']}
        >
          {!isMobile && (
            <Image src={`/images/${item.icon}.svg`} h="75px" alt={item.name} />
          )}

          <Heading
            as="h4"
            fontSize={[16, 20]}
            textAlign={['left', 'center']}
            mt="2"
            color="dark.text"
          >
            {isMobile && (
              <Box
                bg="highlight"
                w="12px"
                height="12px"
                borderRadius="50%"
                mr="1"
                d="inline-block"
              />
            )}
            {item.name}
          </Heading>
        </Box>
      ))}
    </SimpleGrid>
  );
}
