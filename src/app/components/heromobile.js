'use client'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import TypewriterEffect from "./typing"
import TypewriterEffectEmoji from "./typingemoji"
import { useState, useEffect } from 'react';

export default function HeroMobile() {
    const images = ['/bel.png', '/Juice.png', '/mana.png']; // Add your image sources here
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <Box
            w={'full'}
            h={'auto'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Heading
                pt={'32px'}
                fontSize={'32px'}
                fontWeight={500}
            >
                DANIEL.O.JOHNSON
            </Heading>

            <Text
                fontWeight={400}
                fontSize={['12px', '12px', '16px', '24px']}
                display={'flex'}
                gap={'4px'}
            >
                <TypewriterEffectEmoji /> I am a  <TypewriterEffect />

            </Text>

            {/** boxes */}
            <Box
                h={'auto'}
                display={'flex'}
                overflowX={'scroll'} // Ensures horizontal scrolling
                gap={'20px'}
                pt={'40px'}
                maxW={'100%'}
                pb={'20px'} // Optional: Adds padding to the bottom for spacing
            >
                <Image
                    src={'/juicy.png'}
                    alt="Juicy Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />

                <Image
                    src={'/bel.png'}
                    alt="Bel Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />

                <Image
                    src={'/mana.png'}
                    alt="Mana Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />
            </Box>

            {/** ready */}
            <Box
                w={'full'}
                h={'auto'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                pt={'40px'}
                gap={'14px'}
            >
                <Heading fontSize={'24px'} fontWeight={700}>READY TO HELP YOU</Heading>
                <Box
                    w={'200px'}
                    h={'100px'}
                    bg={'grey'}
                    overflow="hidden"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="opacity 0.5s ease-in-out"
                    />
                </Box>
                <Text w={'100%'} fontSize={'16px'} fontWeight={400} color={'#DEDCDC8F'} textAlign={'center'}>
                    Daniel Oluwatosin Johnson is a Nigerian Product Designer who aspires to build the best
                    UX the world has to offer. He is structured to evolve and also a quick learner with
                    enough passion and zeal to drive him up the way.
                </Text>

                <Box
                    w={'full'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'flex-end'}
                    borderBottom={'1px solid #DEDCDC80'}
                    fontSize={'8px'}
                    pt={'60px'}
                >
                    <Box>
                        <Text>Based In North Cyprus/Nigeria.</Text>
                        <Text>Available WorldWide</Text>
                    </Box>
                    <Text>(2024), All Rights Reserved.</Text>
                </Box>
            </Box>
        </Box>
    )
}