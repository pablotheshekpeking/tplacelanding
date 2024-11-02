'use client'

import { Box, Image, Text } from "@chakra-ui/react"

export default function ScrollSection() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', '481px']}
            display={'flex'}
            flexDirection={'row'}
            gap={'40px'}
            overflowY={'scroll'}
        >
            <Image src="/slider1.png" w={'100%'} h={'auto'} />

            <Image src="/slider2.png" w={'90%'} h={'auto'} />

            <Image src="/slider3.png" w={'90%'} h={'auto'} />
        </Box>
    );
}