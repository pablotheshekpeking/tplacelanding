'use client'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  
  const Logo = (props) => {
    return (
      <Image
        src="/logo.png" // Replace with the actual path to your logo image
        alt="Logo"
        height={32}
        {...props}
      />
    );
  };
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
        aria-label={label}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      bg={'black'}
      color={'white'}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
        >
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <chakra.a href="#approach">Approach</chakra.a>
            <chakra.a href="#WhyUs">WhyUs</chakra.a>
            <chakra.a href="#roadmap">Roadmap</chakra.a>
          </Stack>
        </Container>
  
        <Box borderTopWidth={1} borderStyle={'solid'} >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
          >
            <Text>© 2024 Your Company. All rights reserved.</Text>
            <Text>Email: contact@yourcompany.com | Phone: +123 456 7890</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://youtube.com'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://instagram.com'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }
  