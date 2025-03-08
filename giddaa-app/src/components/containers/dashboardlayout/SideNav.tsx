'use client'
import {
    Box,
    Flex,
    Image,
    Link,
    Menu,
    MenuButton, MenuList,
    Text,
    Icon,
    VStack
} from "@chakra-ui/react";
import {FaLock, FaUser} from "react-icons/fa";
import {MoreVertical} from "lucide-react";

export default function SideNav({name = "James Mensah", email = "jamesmensah@gmail.com"}) {
    const getInitials = (fullName: any) => {
        return fullName
            .split(" ")
            .map((n: any[]) => n[0])
            .join("")
            .toUpperCase();
    };
    return (
        <Flex h="100vh" w="100vw" overflowX="hidden" flexDirection={{base: "column", md: "row"}}>
            <VStack bg="#335F32" w={{base: "full", md: "250px"}} p={34} color="white" align="start">
                <Image src="/img/logo.png" alt="Logo" w="99.9px" h="39px"/>
                <Box>
                    <Text fontSize="9px" fontWeight={600} isTruncated maxW="130px">Residencia Moderno Smart you</Text>
                    <Image
                        src="/img/lineT.png"
                        alt="line logo"
                        width="full"
                        backgroundColor={'#335F32'}
                        mb='20px'
                    />
                </Box>

                <Box display="flex" alignItems="center" w="full" gap={10} p={2}>
                    <Image src="/img/Dashboard.png" alt="Dashboard" h="23px" w="23px"/>
                    <Link flex="1" fontWeight={700} fontSize={14} textAlign="left">Dashboard</Link>
                </Box>

                <Box display="flex" alignItems="center" w="185px" h={'40px'} gap={10} pl={12} borderRadius={100}
                     bg="white" mr={10} mt={20}>
                    <Image src="/img/Layer 2.png" alt="Properties" h="24px" w="29px"/>
                    <Link flex="1" fontWeight={700} fontSize={13} textAlign="left" color="#335F32">Properties</Link>
                </Box>

                <Box mt="auto" bg="white" borderRadius={'100px'} w={'185px'} h={'45px'} borderColor={'#D9D9D9'}
                     px='8px'>
                    <Flex align="center" justify="space-between" bg="gray.100">
                        <Flex align="center" gap="2">
                            <Box w="40" h="22" display="flex" borderRadius={'25px'} alignItems="center"
                                 justifyContent="center" bg="#335F32" color="white" fontSize="13px" fontWeight={700}>
                                {getInitials(name)}
                            </Box>
                            <Box ml='10px'>
                                <Text mb='-8px' fontSize="11px" fontWeight={600} color={'#000000'}>{name}</Text>
                                <Text fontSize="9px" fontWeight={600} color="#667085">{email}</Text>
                            </Box>
                        </Flex>
                        <Menu placement="top-end">
                            <MenuButton as={Box} cursor="pointer" p={1}>
                                <MoreVertical size={20} color="#98A2B3"/>
                            </MenuButton>

                            <MenuList shadow="lg" rounded="md" color={'#667085'} p="12" minW="150px"
                                      bg="white" h='100px' borderRadius='5px' border='1px #F9FAFB' mb='20px'>
                                <Box mb='10px' fontWeight={400} fontSize='14px' display='flex' gap='10px'>
                                    <Icon as={FaUser} color="#667085" mr={2}/>My Profile</Box>
                                <Box fontWeight={400} fontSize='14px' display='flex' gap='10px'>
                                    <Icon as={FaLock} color="#667085" mr={2}/>Change Password</Box>
                                <Image
                                    src="/img/line.png"
                                    alt="line logo"
                                    width="full"
                                    backgroundColor={'#335F32'}
                                />
                                <Box color={'#E40000'} fontSize='12px' cursor='pointer'
                                     fontWeight={700} mt={8} display='flex' gap='10px'>
                                    <Image src="/img/off.png" alt="off"/>
                                    Logout
                                </Box>
                            </MenuList>
                        </Menu>

                    </Flex>
                </Box>
            </VStack>
        </Flex>
    );
}