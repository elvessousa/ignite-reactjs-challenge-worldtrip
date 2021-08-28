import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';

type Slide = {
  name: string;
  slug: string;
  excerpt: string;
};

type SliderProps = {
  slides: Slide[];
};

SwiperCore.use([A11y, Navigation, Pagination]);

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
            textAlign="center"
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
                <Heading
                  as="h4"
                  color="white"
                  fontSize="24"
                  opacity="0.8"
                  textShadow="0 0 60px #000"
                >
                  {slide.excerpt}
                </Heading>
              </a>
            </Link>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
