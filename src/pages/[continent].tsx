import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { api } from '../services/api';

type City = {
  position: number;
  city: string;
  country: string;
  arrivals: number;
  continent: string;
  slug?: string;
};

type ContinentProps = {
  cities: City[];
  continent: string;
  slug: string;
  amount: number;
  countries: number;
};

export default function Continent({
  cities,
  continent,
  slug,
  countries,
  amount,
}: ContinentProps) {
  const info = [
    { number: countries, caption: 'países' },
    { number: 60, caption: 'línguas' },
    { number: amount, caption: 'cidades +100' },
  ];

  return (
    <div>
      <Header />
      <Hero title={continent} bg={`/photos/${slug}.jpg`} />

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
        <Heading as="h3" my="6" color="dark.text">
          Cidades +100
        </Heading>

        <SimpleGrid columns={4} my="16" maxW="80vw" mx="auto" gap="4">
          {cities.map((item) => (
            <Card key={item.position} item={item} />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;
  const response = await api.get('ranking');
  const data = response.data.map((city: City) => {
    return {
      ...city,
      slug: city.continent.replace(' ', '-').toLowerCase(),
    };
  });

  const cities = data.filter(({ slug }: City) =>
    slug.includes(String(continent))
  );

  const countries = new Set(cities.map((item: City) => item.country));

  return {
    props: {
      cities,
      continent: cities[0].continent,
      slug: cities[0].continent.replace(' ', '-').toLowerCase(),
      countries: countries.size,
      amount: cities.length,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const continents = [
    'africa',
    'asia',
    'europe',
    'north-america',
    'oceania',
    'south-america',
  ];

  const paths = continents.map((continent) => {
    return {
      params: {
        continent,
      },
    };
  });

  return { paths, fallback: false };
};
