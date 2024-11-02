import { Box } from "@chakra-ui/react";
import HeroDesktop from "./components/hero";
import Skill from "./components/skill";
import Approach from "./components/approach";
import ScrollSection from "./components/scrollsection";
import WhyUs from "./components/whyus";

export default function Home() {
  return (
    <>
    <Box
      w={'full'}
      h={'auto'}
      bg={'white'}
      px={['12px', '12px', '64px', '64px']}
      color={'white'}
      scrollBehavior={'smooth'}
      display={'flex'}
      flexDirection={'column'}
      gap={'48px'}
    >

      <HeroDesktop />

      <Approach />

      <ScrollSection />
      
      <Skill />
    </Box>

  <WhyUs />
  </>
  );
}
