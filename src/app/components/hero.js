'use client'
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react"
import Nav from "./nav"
import TypewriterEffect from "./typing"
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import TypewriterEffectEmoji from "./typingemoji"
import Link from "next/link";
import ReadyDesktop from "./ready"
import { HamburgerIcon } from "@chakra-ui/icons";

export default function HeroDesktop() {
    return (
        <Box
            w={'full'}
            h={'auto'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
        >
            <Nav />
            

            {/**<Text
                fontWeight={400}
                fontSize={['12px', '12px', '14px', '14px']}
                display={'flex'}
                gap={'4px'}
                color={'black'}
            >
                <TypewriterEffectEmoji /> One Stop Shop  <TypewriterEffect />

            </Text>*/}

            {/** boxes */}
            <Box
                h={'auto'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                gap={'20px'}
                pt={'40px'}
            >
                <Text color={'black'} fontWeight={'bold'} fontSize={['40px', '40px', '80px', '80px']} textAlign={'center'} maxW={'100%'}>
                    We're <span style={{ color: 'orange' }}>Shopping</span> experts helping brands figure out <TypewriterEffect /> growth & profitability.
                </Text>
                <Box w={'full'} h={'100px'} display={'flex'} justifyContent={'center'} gap={'20px'}>
                    <Box h={'100%'} bg={'black'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={['medium', 'medium', 'x-large', 'x-large']} gap={'10px'} p={'20px'} borderRadius={'10px'}>
                        <IoLogoGooglePlaystore />
                        <Text>Download for Android</Text>
                    </Box>

                    <Box h={['auto', 'auto', '100%', '100%']} bg={'orange'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={['medium', 'medium', 'x-large', 'x-large']} gap={'10px'} p={'20px'} borderRadius={'10px'}>
                        <IoLogoAppleAppstore />
                        <Text>Download for iOS</Text>
                        
                    </Box>
                </Box>
            </Box>

            {/** ready 
            <ReadyDesktop />*/}
            {/** hero icons */}
            <Box w={[50, 50, 200, 200]} height={'auto'} position={'absolute'} top={['40vh', '40vh', '50vh', '50vh']} right={'2px'}>
                <Image src={'/star.png'} alt="star" width={'auto'} height={'auto'} />
            </Box>

            <Box w={[50, 50, 140, 140]} height={'auto'} position={'absolute'} top={'30vh'} left={'2px'}>
                <Image src={'/cup.png'} alt="cup" width={'auto'} height={'auto'} />
            </Box>

            <Box w={[50, 50, 140, 140]} height={'auto'} position={'absolute'} top={['60vh', '60vh', '80vh', '80vh']} left={'0px'}>
                <Image src={'/tik.png'} alt="cup" width={'auto'} height={'auto'} />
            </Box>
        </Box>
    )
}