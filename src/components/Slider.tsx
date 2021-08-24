import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Slide = {
  name: string;
  slug: string;
};

type SliderProps = {
  slides: Slide[];
};

export function Slider({ slides }: SliderProps) {
  return (
    <Swiper navigation pagination={{ clickable: true }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.slug}>
          <Box
            height="500px"
            d="flex"
            justifyContent="center"
            alignItems="center"
            backgroundImage={`url(/photos/${slide.slug}.jpg)`}
            bgPosition="center"
            backgroundPosition="no-repeat"
            backgroundSize="cover"
          >
            <Link href={`/${slide.slug}`}>
              <a>
                <Heading
                  as="h3"
                  fontSize="50"
                  color="white"
                  textShadow="0 0 60px #000"
                >
                  {slide.name}
                </Heading>
              </a>
            </Link>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
