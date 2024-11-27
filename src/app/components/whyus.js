'use client'

import { Box, Image, Text } from "@chakra-ui/react"
import WhyBlock from "./whyblock";

export default function WhyUs() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', 'auto']}
            display={'flex'}
            flexDirection={'column'}
            right={'64px'}
            gap={'0px'}
            color={'black'}
        >
            <Box w={'full'} bg={'#F5FBFF'} h={'200px'} px={'60px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} pt={'40px'}>
                <Text fontSize={['20px', '20px', '40px', '40px']} textAlign={'center'} fontWeight={'bold'} bgGradient="linear(to-r, orange.500, yellow.400)" bgClip="text">Why you should choose Trade Place</Text>
                <Text fontSize={['12px', '12px', '20px', '20px']} textAlign={'center'}>These case studies are from Shopify. For more case studies click here.</Text>
            </Box>

            <WhyBlock
            Head="Unmatched Product Variety and Quality"
            SubText="Trade Place offers a wide selection of high-quality products across diverse categories, ensuring that customers can find everything they need in one place. We partner with trusted suppliers and brands to deliver reliable products that meet our high standards for quality and value."
            ImgSrc="/why1.png"
            BackColor='#F5FBFF'
            Orientation={['column', 'column', "row", "row"]}
            />

            <WhyBlock
            Head="Secure and Seamless Shopping Experience"
            SubText="With Trade Place, security is a priority. Our platform provides a safe and smooth shopping experience with secure payment gateways and robust data protection practices. We continuously update our system to safeguard your information, making online shopping stress-free."
            ImgSrc="/why2.png"
            BackColor='#F2ECFA'
            Orientation={['column', 'column', "row-reverse", "row-reverse"]}
            />

            <WhyBlock
            Head="Exceptional Customer Support and Satisfaction"
            SubText="We believe that our customers deserve the best. Trade Place offers a responsive and knowledgeable customer support team to assist you at every step, from order inquiries to product issues. Our commitment to your satisfaction ensures a positive shopping experience each time you visit."
            ImgSrc="/why3.png"
            BackColor='#FDEBFF'
            Orientation={['column', 'column', "row", "row"]}
            />
        </Box>
    );
}