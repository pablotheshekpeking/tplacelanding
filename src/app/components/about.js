'use client'

import { Box, Image, Text } from "@chakra-ui/react"

export default function About() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', '481px']}
            display={'flex'}
            flexDirection={['column', 'column', 'column', 'row']}
            gap={'40px'}
            color={'black'}
        >
            <Box
                w={['full', 'full', 'full', '60%']}
                h={'full'}
                display={'flex'}
                flexDirection={['column', 'column', 'column', 'row']}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={['12px', '12px', '12px', '0px']}
            >
                <Text fontSize={'32px'} fontWeight={500}>About</Text>
                <Image src="/daniel.png" w={'450px'} h={'481px'} borderRadius={'20px'} />
            </Box>

            <Box
                w={['full', 'full', 'full', '40%']}
                h={'full'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-end'}
                justifyContent={'center'}
                gap={'56px'}
            >
                <Text fontSize={'16px'} lineHeight={'48px'}>
                    <span style={{ fontWeight: 700, }}>Hey there,</span> I'm Daniel Johnson, a 21-year-old designer. I'm passionate about combining creativity with functionality to come up with purposeful designs. Learning is a lifelong journey for me,
                    and each project is an opportunity for personal growth and leaving my touch in the world through design.
                </Text>

                <Box
                display={'flex'}
                alignItems={'center'}
                gap={'8px'}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 1.5C17.8978 1.5 18.2794 1.65804 18.5607 1.93934C18.842 2.22064 19 2.60218 19 3V21C19 21.3978 18.842 21.7794 18.5607 22.0607C18.2794 22.342 17.8978 22.5 17.5 22.5H8.5C8.10218 22.5 7.72064 22.342 7.43934 22.0607C7.15804 21.7794 7 21.3978 7 21V3C7 2.60218 7.15804 2.22064 7.43934 1.93934C7.72064 1.65804 8.10218 1.5 8.5 1.5H17.5ZM8.5 0C7.70435 0 6.94129 0.316071 6.37868 0.87868C5.81607 1.44129 5.5 2.20435 5.5 3V21C5.5 21.7956 5.81607 22.5587 6.37868 23.1213C6.94129 23.6839 7.70435 24 8.5 24H17.5C18.2956 24 19.0587 23.6839 19.6213 23.1213C20.1839 22.5587 20.5 21.7956 20.5 21V3C20.5 2.20435 20.1839 1.44129 19.6213 0.87868C19.0587 0.316071 18.2956 0 17.5 0L8.5 0Z" fill="#60CE0A" />
                        <path d="M13 21C13.3978 21 13.7794 20.842 14.0607 20.5607C14.342 20.2794 14.5 19.8978 14.5 19.5C14.5 19.1022 14.342 18.7206 14.0607 18.4393C13.7794 18.158 13.3978 18 13 18C12.6022 18 12.2206 18.158 11.9393 18.4393C11.658 18.7206 11.5 19.1022 11.5 19.5C11.5 19.8978 11.658 20.2794 11.9393 20.5607C12.2206 20.842 12.6022 21 13 21Z" fill="#60CE0A" />
                    </svg>

                    <Text color={'#60CE0A'} fontSize={'18px'} lineHeight={'48px'}>Let's create something amazing!</Text>
                </Box>
            </Box>
        </Box>
    );
}