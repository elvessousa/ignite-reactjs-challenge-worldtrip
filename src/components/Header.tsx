import Link from 'next/link';
import { Box, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as="header" p="3" height="16" d="flex" justifyContent="center">
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            mx="auto"
            height="100%"
            alt="World Trip"
          />
        </a>
      </Link>
    </Box>
  );
}
