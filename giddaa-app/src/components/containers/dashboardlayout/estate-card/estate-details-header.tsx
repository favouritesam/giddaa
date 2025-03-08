import {
    Box,
    Text,
    Image,
    Flex,
    Button,
     MenuButton, MenuList, Menu
} from "@chakra-ui/react";
import React from "react";
import {ChevronRightIcon, MoreVertical} from "lucide-react";
import EstateTabs from "@/components/containers/dashboardlayout/estate-card/estate-tabs";
import {useRouter} from "next/navigation";

interface Estate {
    id: number;
    name: string;
    type: string;
    location: string;
    city: string;
    address: string;
    completionStatus: string;
    landSize: string;
    description: string;
    videoUrl: string;
    images: { url: string; label: string }[];
}

interface EstateDetailsProps {
    estate: Estate;
}

const EstateDetailsHeader: React.FC<EstateDetailsProps> = ({estate}) => {
    const router = useRouter()

    return (
        <Box
            position="relative"
            minHeight="calc(100vh - 32px)"
            // width="100%"
            bg="white"
            px="2%"
        >
            <Flex justifyContent="space-between" alignItems="center" width="100%" mb={4}>
                <Flex alignItems="center" gap={10}>
                    <Button
                        onClick={() => router.push("/dashboard-header")}
                        variant="outline"
                        w="81px"
                        h="32px"
                        borderRadius="5px"
                        border="2px solid #335F32"
                        bg="#FFFFFF"
                        color="#335F32"
                        _hover={{bg: "#335F32", color: "#FFFFFF"}}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        fontWeight={700}
                        fontSize="13px"
                        cursor="pointer"
                    >
                        <Image src="/img/buttonArrow.png" alt="Back" w="12px" h="12px"/>
                        Back
                    </Button>

                    <Box fontSize="2xl" fontWeight="bold" color="#000000">
                        {estate.name}
                    </Box>
                </Flex>

                <Flex gap={10}>
                    <Button
                        w="134px"
                        cursor="pointer"
                        h="35px"
                        borderRadius="100px"
                        bg="#346633"
                        border="none"
                        color="#FFFFFF"
                        display="flex"
                        alignItems="center"
                        gap={2}
                    >
                        <Image src="/img/editWhite.png" alt="edit" w="12px" h="12px"/>
                        Update Estate
                    </Button>

                    <Menu placement="bottom-start">
                        <MenuButton as={Box} cursor="pointer" p={1} w='26px' h='26px' borderRadius='20px'
                                    bg='#F0F0F0'
                                    justifyContent='center' alignItems="center">
                            <MoreVertical color="#98A2B3"/>
                        </MenuButton>
                        <MenuList p="12px" minW="130px" bg="white" h='162px' borderRadius='15px'
                                  border='1px #E1E1E1 solid' cursor='pointer'>
                            <Flex gap={10} alignItems='center'><Image src="/img/church.png" alt="church"
                                                                      w='16px'
                                                                      h='14.54px'/><Text
                                fontWeight={400} fontSize={14}> Add House</Text></Flex>
                            <Flex gap={10} alignItems='center'>
                                <Image src="/img/share.svg" alt="share" w='14px' h='14px'/>
                                <Text fontWeight={400} fontSize={14}> Share Estate</Text>
                            </Flex>
                            <Flex gap={10} alignItems='center'>
                                <Image src="/img/q.svg" alt="q" w='14px' h='14px'/>
                                <Text fontWeight={400} fontSize={14}> QR Code</Text>
                            </Flex>
                            <Flex gap={10} alignItems='center'>
                                <Image src="/img/delete.png" alt="delete" w='12px' h='15px'/>
                                <Text fontWeight={400} fontSize={14}> Delete Estate</Text>
                            </Flex>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            <Flex alignItems="center" gap={2} mb={8}>
                <Text fontSize="sm" fontWeight={200} cursor="pointer"
                      _hover={{textDecoration: "underline"}}>Estates</Text>
                <ChevronRightIcon color='#979797' size={14}/>
                <Text fontWeight={400} fontSize="sm">{estate.name}</Text>
            </Flex>
            <Box w="full" borderBottom="1px solid #F0F0F0"/>

            <Flex mt="12px" bg="white" display="flex" flexDirection="column">
                <EstateTabs estate={estate}/>
            </Flex>
        </Box>
    );
};

export default EstateDetailsHeader;
