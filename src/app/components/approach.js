'use client'

import { Box, Button, Image, Text } from "@chakra-ui/react"

export default function Approach() {
    return (
        <Box
            w={'full'}
            h={'800px'}
            display={'flex'}
            flexDirection={['column', 'column', 'row', 'row']}
            gap={'40px'}
            alignItems={'center'}
        >
            <Box width={['100%', '100%', '50%', '50%']} display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Text color={'orange'} fontSize={'26px'} fontWeight={500}>Our difference is our approach.</Text>

                <Text fontWeight={'bold'} fontSize={['20px', '20px', '42px', '42px']} color={'black'}>
                    We're your ecommerce growth custodians.
                </Text>

                <Text fontSize={['12px', '12px', '20px', '20px']} color={'black'}>Success in ecommerce requires omni-channel targets and long term strategic thinking. You don't need a Shopify developer or a performance marketer. You need a custodian to share the responsibility for the health of your entire ecommerce business.
                </Text>

                <Button bg={'orange'} width={'30%'} height={'50px'} fontSize={'12px'} borderRadius={'44px'}>Shop with us</Button>
            </Box>

            <Image src="/chart.png" width={['100%', '100%', '50%', '50%']} height={'460px'} />

        </Box>
    );
}