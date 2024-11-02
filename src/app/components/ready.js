'use client'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

export default function ReadyDesktop() {
    const images = ['/first.png', '/second.png', '/third.png']; // Add your image sources here
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
            h={'50vh'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            pt={'160px'}
            color={'black'}
        >
            <Box
                w={'744px'}
                maxW={'3xl'}
                h={'400px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-end'}
            >
                {/** top box */}
                <Box
                    h={'60%'}
                    w={'full'}
                    display={'flex'}
                >
                    <Box
                        w={'70%'}
                        h={'full'}
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Heading fontSize={'84px'} v>READY</Heading>
                        <Heading fontSize={'84px'}><span style={{color: 'orange'}}>SERVE</span> YOU</Heading>
                    </Box>

                    <Box
                        w={'30%'}
                        h={'full'}
                    >
                        <Heading fontSize={'84px'}>{" "}TO</Heading>
                        <Box
                            w={'240px'}
                            h={'180px'}
                            bg={'grey'}
                            position={'relative'}
                            bottom={44}
                            right={60}
                            zIndex={999}
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
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}