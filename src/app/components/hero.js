'use client'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import Nav from "./nav"
import TypewriterEffect from "./typing"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import TypewriterEffectEmoji from "./typingemoji"
import ReadyDesktop from "./ready"

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
            <Image src={'/logo.png'} alt="logo" width={['100%', '100%', '400px', '400px']} height={'auto'} />

            <Text
                fontWeight={400}
                fontSize={['12px', '12px', '14px', '14px']}
                display={'flex'}
                gap={'4px'}
                color={'black'}
            >
                <TypewriterEffectEmoji /> One Stop Shop  <TypewriterEffect />

            </Text>

            {/** boxes */}
            <Box
                h={'auto'}
                display={'flex'}
                justifyContent={'center'}
                gap={'20px'}
                pt={'40px'}
            >
                <Text color={'black'} fontWeight={'bold'} fontSize={['40px', '40px', '80px', '80px']} textAlign={'center'} maxW={'90%'}>
                    We're <span style={{ color: 'orange' }}>Shopping</span> experts helping brands figure out <span style={{ color: 'orange' }}>ecommerce</span> growth & profitability.
                </Text>
            </Box>

            {/** ready 
            <ReadyDesktop />*/}
            {/** hero icons */}
            <Box w={[50, 50, 200, 200]} height={'auto'} position={'absolute'} top={['60vh', '60vh', '50vh', '50vh']} right={'2px'}>
                <Image src={'/star.png'} alt="star" width={'auto'} height={'auto'} />
            </Box>

            <Box w={[50, 50, 140, 140]} height={'auto'} position={'absolute'} top={'30vh'} left={'2px'}>
                <Image src={'/cup.png'} alt="cup" width={'auto'} height={'auto'} />
            </Box>

            <Box w={[50, 50, 140, 140]} height={'auto'} position={'absolute'} top={['90vh', '90vh', '80vh', '80vh']} left={'0px'}>
                <Image src={'/tik.png'} alt="cup" width={'auto'} height={'auto'} />
            </Box>
        </Box>
    )
}