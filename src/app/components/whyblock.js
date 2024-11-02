import { Box, Text, Image } from "@chakra-ui/react"

export default function WhyBlock({Head, ImgSrc, SubText, Orientation, BackColor}) {
    return (
        <Box w={'full'} bg={BackColor} h={'auto'} px={'60px'} pt={'20px'} display={'flex'} flexDirection={Orientation} alignItems={'center'} justifyContent={'center'}>
            <Box w={['full', 'full', '50%', '50%']} display={'flex'} flexDirection={'column'}>
                <Text fontWeight={'bold'} fontSize={['20px', '20px', '56px', '56px']}>{Head}</Text>
                <Text fontSize={['12px', '12px', '20px', '20px']}>{SubText}</Text>
            </Box>
            <Image src={ImgSrc} w={['full', 'full', '50%', '50%']} h={'auto'} />
        </Box>
    )
}