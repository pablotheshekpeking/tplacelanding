'use client'
import { Box } from "@chakra-ui/react";
import HeroDesktop from "./components/hero";
import Skill from "./components/skill";
import Approach from "./components/approach";
import ScrollSection from "./components/scrollsection";
import WhyUs from "./components/whyus";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      {/* Main Content */}
      <Box
        as={motion.div}
        w="full"
        flex="1" // Ensures the content grows to push the footer down
        h="auto"
        bg="white"
        px={['12px', '12px', '64px', '64px']}
        color="white"
        scrollBehavior="smooth"
        display="flex"
        flexDirection="column"
        gap="48px"
      >
        <HeroDesktop />
        <section id="approach" data-aos="fade-up">
          <Approach />
        </section>
        <section id="roadmap" data-aos="fade-up">
          <ScrollSection />
        </section>
        {/** <Skill /> */}
      </Box>

      {/* Why Us Section */}
      <section id="WhyUs" data-aos="fade-up">
        <WhyUs />
      </section>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
