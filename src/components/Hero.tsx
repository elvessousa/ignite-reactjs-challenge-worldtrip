import { ReactNode } from 'react';
import { Flex, Heading, Image, useMediaQuery } from '@chakra-ui/react';

type HeroProps = {
  title: string;
  alt?: string;
  bg?: string;
  bgPos?: string;
  height?: string;
  image?: string;
  children?: ReactNode;
};

export function Hero({
  title,
  alt,
  bg,
  bgPos,
  height,
  image,
  children,
}: HeroProps) {
  const [isMobile] = useMediaQuery(['(max-width: 720px)']);
  const titleAlign = image ? 'center' : 'flex-end';
  const background = bg
    ? {
        backgroundImage: `url('${bg}')`,
        bgPos: bgPos ?? 'center',
        backgroundPosition: 'no-repeat',
        bgSize: 'cover',
      }
    : { bgGradient: 'linear(to-b, #023, #036)' };

  return (
    <Flex p={[12, 16]} height={height ?? '500px'} color="white" {...background}>
      <Flex flexDir="column" justifyContent={titleAlign}>
        <Heading size="xl" mb="4">
          {title}
        </Heading>
        {children}
      </Flex>
      {image && !isMobile && (
        <Image src={image} alt={alt} top="38" pos="relative" />
      )}
    </Flex>
  );
}
