'use client'

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box w={'full'} h={'auto'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      {/* Logo */}
      <Image src={'/logo.png'} alt="logo" width={['50%', '50%', '400px', '400px']} height={'100%'} />

      {/* Desktop Nav */}
      <Box
        w={'full'}
        display={['none', 'none', 'flex', 'flex']}
        gap={'64px'}
        fontSize={['12px', '12px', '16px', '16px']}
        pt={'56px'}
        justifyContent={'right'}
        color={'black'}
        alignItems={'center'}
        initial="hidden"
        animate="visible"
        variants={linkVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Internal Links */}
        <ScrollLink to="approach" smooth={true} duration={500} style={{cursor: 'pointer'}}>
          <motion.div variants={linkVariants}>
            <Text>Approach</Text>
          </motion.div>
        </ScrollLink>
        <ScrollLink to="WhyUs" smooth={true} duration={500} style={{cursor: 'pointer'}}>
          <motion.div variants={linkVariants}>
            <Text>WhyUs</Text>
          </motion.div>
        </ScrollLink>
        <ScrollLink to="roadmap" smooth={true} duration={500} style={{cursor: 'pointer'}}>
          <motion.div variants={linkVariants}>
            <Text>Roadmap</Text>
          </motion.div>
        </ScrollLink>

        {/* External Links */}
        <Link href={'https://tplace-orpin.vercel.app/login'} target="_blank">
          <Text w={'100px'} h={'50px'} borderRadius={'20px'} bg={'orange'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Login</Text>
        </Link>
        <Link href={'https://tplace-orpin.vercel.app/register'} target="_blank">
          <Text w={'100px'} h={'50px'} borderRadius={'20px'} bg={'black'} color={'orange'} border={'1px solid orange'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Signup</Text>
        </Link>
      </Box>

      {/* Mobile Nav */}
      <Box display={['flex', 'flex', 'none', 'none']} w={'full'} justifyContent={'right'}>
        <HamburgerIcon
          boxSize={10}
          borderRadius={'10px'}
          bg={'orange'}
          color={'black'}
          onClick={onOpen}
          cursor={'pointer'}
        />
      </Box>

      {/* Drawer for Mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap="24px">
            {/* Internal Links */}
            <ScrollLink to="home" smooth={true} duration={500} onClick={onClose}>
              <Text>Home</Text>
            </ScrollLink>
            <ScrollLink to="approach" smooth={true} duration={500} onClick={onClose}>
              <Text>Approach</Text>
            </ScrollLink>
            <ScrollLink to="WhyUs" smooth={true} duration={500} onClick={onClose}>
              <Text>WhyUs</Text>
            </ScrollLink>
            <ScrollLink to="roadmap" smooth={true} duration={500} onClick={onClose}>
              <Text>Roadmap</Text>
            </ScrollLink>

            {/* External Links */}
            <ChakraLink
              as={Link}
              href="https://tplace-orpin.vercel.app/login"
              target="_blank"
              onClick={onClose}
            >
              <Text w={'100px'} h={'50px'} borderRadius={'20px'} bg={'orange'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Login</Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="https://tplace-orpin.vercel.app/register"
              target="_blank"
              onClick={onClose}
            >
              <Text w={'100px'} h={'50px'} borderRadius={'20px'} bg={'black'} color={'orange'} border={'1px solid orange'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Signup</Text>
            </ChakraLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
