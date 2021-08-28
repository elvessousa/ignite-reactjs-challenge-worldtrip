import { Box, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FiInfo } from 'react-icons/fi';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { api } from '../services/api';

type City = {
  position: number;
  city: string;
  image: string;
  country: string;
  code: string;
  arrivals: number;
  continent: string;
  slug?: string;
};

type Continent = {
  name: string;
  slug: string;
  excerpt: string;
  languages: number;
  text: string;
};

type ContinentProps = {
  cities: City[];
  continent: Continent;
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
    { number: continent.languages, caption: 'línguas' },
    { number: amount, caption: 'cidades +100' },
  ];

  return (
    <div>
      <Header />
      <Hero title={continent.name} bg={`/photos/${slug}.jpg`} />

      <SimpleGrid columns={[1, 2]} my="16" maxW="80vw" mx="auto">
        <Box as="p">{continent.text}</Box>

        <Box d="flex" justifyContent="center">
          {info.map((item) => (
            <Box key={item.caption} textAlign="center" p="4">
              <Heading as="h3" size="xl" color="highlight">
                {item.number}
              </Heading>
              <Heading color="dark.text" fontSize="20">
                {item.caption}
                {item.caption === 'cidades +100' && (
                  <Icon as={FiInfo} ml="1" boxSize={4} color="dark.info.500" />
                )}
              </Heading>
            </Box>
          ))}
        </Box>
      </SimpleGrid>

      <Box maxW="80vw" mx="auto">
        <Heading
          as="h3"
          my="6"
          textAlign={['center', 'left']}
          color="dark.text"
        >
          Cidades +100
        </Heading>

        <SimpleGrid columns={[1, 4]} my="16" maxW="80vw" mx="auto" gap="4">
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

  const continentResponse = await api.get('continents');
  const continentData = continentResponse.data.filter(
    (item: Continent) => item.slug === continent
  )[0];

  const rankingResponse = await api.get('ranking');
  const rankingData = rankingResponse.data.map((city: City) => {
    return {
      ...city,
      slug: city.continent.replace(' ', '-').toLowerCase(),
    };
  });

  const cities = rankingData.filter(({ slug }: City) =>
    slug.includes(String(continent))
  );

  const countries = new Set(cities.map((item: City) => item.country));

  return {
    props: {
      cities,
      continent: continentData,
      slug: continent,
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
