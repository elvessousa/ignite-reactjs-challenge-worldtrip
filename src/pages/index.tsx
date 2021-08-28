import { Box, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Slider } from '../components/Slider';
import { api } from '../services/api';

type Continent = {
  name: string;
  slug: string;
  excerpt: string;
  languages: number;
  text: string;
};

type HomeProps = {
  continents: Continent[];
};

export default function Home({ continents }: HomeProps) {
  return (
    <div>
      <Header />
      <Hero
        title="5 Continentes, infinitas possibilidades"
        image="/images/airplane.svg"
        alt="Airplane"
        bg="/photos/hero.jpg"
        bgPos="bottom"
        height="400px"
      >
        <p>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</p>
      </Hero>

      <Box maxW="80vw" mx="auto" mb="20">
        <Categories />

        <hr />
        <Heading as="h2" textAlign="center" m="6" color="dark.text">
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>

        <Slider slides={continents} />
      </Box>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents');

  return {
    props: {
      continents: data,
    },
  };
};
