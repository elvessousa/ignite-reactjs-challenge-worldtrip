import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import { chakra, Flex, Icon, Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex as="header" p="3" height="16" maxW="80vw" mx="auto" align="center">
      {asPath !== '/' && (
        <Link href="/">
          <a>
            <Icon as={FiChevronLeft} boxSize={6} mr="auto" />
          </a>
        </Link>
      )}
      <Link href="/" passHref>
        <chakra.a mx="auto">
          <Image src="/images/logo.svg" height="8" alt="World Trip" />
        </chakra.a>
      </Link>
    </Flex>
  );
}
