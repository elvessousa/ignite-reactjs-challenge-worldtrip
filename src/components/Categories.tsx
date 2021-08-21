import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';

export function Categories() {
  const items = [
    { name: 'vida noturna', icon: 'cocktail' },
    { name: 'praia', icon: 'surf' },
    { name: 'moderno', icon: 'building' },
    { name: 'clássico', icon: 'museum' },
    { name: 'e mais...', icon: 'earth' },
  ];

  return (
    <SimpleGrid columns={5} gap="2" m="10">
      {items.map((item) => (
        <Box key={item.name} d="flex" flexDir="column" justifyContent="center">
          <Image src={`/images/${item.icon}.svg`} alt={item.name} />
          <Heading
            as="h4"
            fontSize="20"
            textAlign="center"
            mt="2"
            color="dark.text"
          >
            {item.name}
          </Heading>
        </Box>
      ))}
    </SimpleGrid>
  );
}
