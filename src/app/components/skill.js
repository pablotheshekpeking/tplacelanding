'use client'

import { Box, Image, Text } from "@chakra-ui/react"

export default function Skill() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', '481px']}
            display={'flex'}
            flexDirection={['column', 'column', 'column', 'row']}
            gap={'40px'}
        >
            <Box
                w={['full', 'full', 'full', '20%']}
                h={'full'}
                display={'flex'}
                flexDirection={['column', 'column', 'column', 'row']}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={['12px', '12px', '12px', '0px']}
            >
                <Text color={'#DEDCDC'} fontSize={'24px'} fontWeight={500}>Skills</Text>
            </Box>

            <Box
                w={['full', 'full', 'full', '80%']}
                h={'full'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-end'}
                justifyContent={'center'}
                gap={'40px'}
                fontSize={['8px', '8px', '12px', '18px']} 
            >
                <Text border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid purple', backgroundColor: 'orange' }}>Design Thinking</Text>

                <Box
                display={'flex'}
                gap={['12px', '12px', '24px', '24px']}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid red', backgroundColor: 'orange' }}>Problem Thinking</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid red', backgroundColor: 'orange' }}>UX</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid red', backgroundColor: 'orange' }}>Communication</Text>
                </Box>

                <Box
                display={'flex'}
                gap={['12px', '12px', '24px', '24px']}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid green', backgroundColor: 'orange' }}>User Research</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid green', backgroundColor: 'orange' }}>New Concept</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid green', backgroundColor: 'orange' }}>Figma</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid green', backgroundColor: 'orange' }}>Product Ideation</Text>
                </Box>

                <Box
                display={'flex'}
                gap={['12px', '12px', '24px', '24px']}
                alignItems={'center'}
                justifyContent={'center'}
                >
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid purple', backgroundColor: 'orange' }}>Wire Framing</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid purple', backgroundColor: 'orange' }}>Critical Thinking</Text>
                    <Text  border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid purple', backgroundColor: 'orange' }}>Time Management</Text>
                    <Text border={'1px solid #DEDCDCD6'} px={'14px'} py={'12px'} borderRadius={'40px'} bg={'#151515'} _hover={{ border: '1px solid purple', backgroundColor: 'orange' }}>Prototyping</Text>
                </Box>
            </Box>
        </Box>
    );
}