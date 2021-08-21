import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Continent() {
  const info = [
    { number: 50, caption: 'países' },
    { number: 60, caption: 'línguas' },
    { number: 27, caption: 'cidades +100' },
  ];

  return (
    <div>
      <Header />
      <Hero title="Europa" bg="/photos/europe.jpg" />
      <SimpleGrid columns={2} my="16" maxW="80vw" mx="auto">
        <Box as="p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          deleniti voluptate libero aut amet! Corrupti, architecto labore harum
          similique animi odit debitis quis natus necessitatibus quae possimus,
          eos, minima soluta?
        </Box>
        <Box d="flex" justifyContent="center">
          {info.map((item) => (
            <Box key={item.caption} textAlign="center" p="4">
              <Heading as="h3" size="xl" color="highlight">
                {item.number}
              </Heading>
              <Heading color="dark.text" fontSize="20">
                {item.caption}
              </Heading>
            </Box>
          ))}
        </Box>
      </SimpleGrid>

      <Box maxW="80vw" mx="auto">
        <Heading as="h3" m="6" color="dark.text">
          Cidades +100
        </Heading>
      </Box>
    </div>
  );
}
