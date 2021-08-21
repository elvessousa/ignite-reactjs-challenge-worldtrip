import { Box, Heading } from '@chakra-ui/react';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        title="5 Continentes, infinitas possibilidades"
        image="/images/airplane.png"
      >
        <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</p>
      </Hero>
      <Box maxW="80vw" mx="auto">
        <Categories />
        <hr />
        <Heading as="h2" textAlign="center" m="6" color="dark.text">
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
      </Box>
    </div>
  );
}
