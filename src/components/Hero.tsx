import { ReactNode } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

type HeroProps = {
  title: string;
  bg?: string;
  image?: string;
  children?: ReactNode;
};

export function Hero({ title, bg, image, children }: HeroProps) {
  const titleAlign = image ? 'center' : 'flex-end';
  const background = bg
    ? {
        backgroundImage: `url('${bg}')`,
        bgPosition: 'center',
        backgroundPosition: 'no-repeat',
      }
    : { bgGradient: 'linear(to-b, #023, #036)' };

  return (
    <Box p="16" height="500px" d="flex" color="white" {...background}>
      <Box d="flex" flexDir="column" justifyContent={titleAlign}>
        <Heading size="xl">{title}</Heading>
        {children}
      </Box>
      {image && <Image src={image} alt="Plane" />}
    </Box>
  );
}
