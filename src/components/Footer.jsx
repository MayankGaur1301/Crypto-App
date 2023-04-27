import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';


const avatarSrc = 'https://avatars.githubusercontent.com/u/130033122';

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"16"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"} textTransform={'uppercase'} fontFamily={'Poppins'} letterSpacing={'2px'}>About Us</Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                        fontFamily={'Poppins'}
                        letterSpacing={'2px'}
                    >
                        We are the crypto trading app in India
                    </Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"20"} mt={["4", "0"]} border={'2px solid white'} src={avatarSrc} />
                    <Text
                        w={'100%'}
                        fontSize={'15px'}
                        textAlign={'center'}
                        fontWeight={'bold'}
                        fontFamily={'Poppins'}
                        letterSpacing={'4px'}
                    >
                        CREATER
                    </Text>

                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;