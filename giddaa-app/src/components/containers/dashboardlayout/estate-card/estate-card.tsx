import {Box, Flex, Image, Text, Menu, MenuButton, MenuList} from "@chakra-ui/react";
import {MoreVertical} from "lucide-react";

// @ts-ignore
const EstateCard = ({estate}) => {
    return (
        <Box
            bg="white"
            borderRadius="16px"
            overflow="hidden"
            border="1px solid #D9D9D9"
            maxW="400px"
            flex="1"
            minW="280px"
            display="flex"
            flexDirection="column"
            transition="0.3s"
            _hover={{boxShadow: "md"}}
        >

            <Box position="relative">
                <Image
                    src={estate.Image}
                    w="100%"
                    h="200px"
                    objectFit="cover"
                    alt={estate.name}
                />

                <Flex
                    position="absolute"
                    top="10px"
                    left="10px"
                    right="10px"
                    justifyContent="space-between"
                    alignItems="center"
                    w="calc(100% - 20px)"
                    px={3}
                    py={1}
                    borderRadius="12px"
                >

                    <Flex
                        bg="#EAFFEA"
                        color="#335F32"
                        fontSize="12px"
                        fontWeight="bold"
                        border="1px solid #D9D9D9"
                        borderRadius="20px"
                        px={3}
                        py={1}
                        alignItems="center"
                        justifyContent="center"
                        w="74px"
                        h="24px"
                    >
                        {estate.houses} Houses
                    </Flex>
                </Flex>
            </Box>


            <Box p={4} flexGrow={1}>
                <Text textAlign="center" fontWeight={700} fontSize="20px" color="#000000">
                    {estate.name}
                </Text>
                <Text textAlign="center" color="#000000" fontSize="16px" lineHeight="21px" fontWeight={400} px='4px'>
                    {estate.address}
                </Text>
            </Box>

            <Flex position="relative" justify='flex-end' mr={10} mb={10} bg='white'>
                <Menu placement="bottom-start">
                    <MenuButton as={Box} cursor="pointer" p={1} w='22.13px' h='24px' borderRadius='20px' bg='#F0F0F0'
                                justifyContent='center' alignItems="center">
                        <MoreVertical size={20} color="#98A2B3"/>
                    </MenuButton>
                    <MenuList p="12px" minW="130px" bg="white" h='162px' borderRadius='15px'
                              border='1px #E1E1E1 solid' cursor='pointer'>
                        <Flex gap={10} alignItems='center'><Image src="/img/eye.png" alt="eye" w='16px' h='12px'/><Text
                            fontWeight={400} fontSize={14}> View House</Text></Flex>
                        <Flex gap={10} alignItems='center'>
                            <Image src="/img/edit.png" alt="edit" w='12px' h='12px'/>
                            <Text fontWeight={400} fontSize={14}> Edit Estate</Text>
                        </Flex>
                        <Flex gap={10} alignItems='center'>
                            <Image src="/img/house.png" alt="house" w='14px' h='12.16px'/>
                            <Text fontWeight={400} fontSize={14}> Add House</Text>
                        </Flex>
                        <Flex gap={10} alignItems='center'>
                            <Image src="/img/delete.png" alt="delete" w='12px' h='15px'/>
                            <Text fontWeight={400} fontSize={14}> Delete Estate</Text>
                        </Flex>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
};

export default EstateCard;
