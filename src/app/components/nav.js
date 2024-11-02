'use client'

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Nav(){
    return (
        <Box
        w={'full'}
        display={'flex'}
        gap={'64px'}
        fontSize={['12px', '12px', '16px', '16px']}
        pt={'56px'}
        justifyContent={'right'}
        color={'black'}
        >
            <Link href={'https://tplace-orpin.vercel.app/login'} target="_blank"><Text textDecoration={'underline'}>Login</Text></Link>
            <Link href={'https://tplace-orpin.vercel.app/register'} target="_blank"><Text>Signup</Text></Link>
        </Box>
    )
}

