import {
    Box,
    Text,
    Image,
    Flex,
    Button,
    Grid,
    GridItem,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    HStack, MenuButton, MenuList, Menu
} from "@chakra-ui/react";
import React, {useState} from "react";
import {ChevronRightIcon, MoreVertical} from "lucide-react";
import EstateTabs from "@/components/containers/dashboardlayout/estate-card/estate-tabs";

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
    const [showMore, setShowMore] = useState(false);

    return (
        <Box height="100vh" display="flex"
             overflowX="hidden"
             flexDirection={{base: "column", md: "row"}}
             py={16}
             w="100%"
             maxW="95%"
             mx="auto"
             px={{base: 4, md: 10, lg: 16}}
        >
            {/* Sticky Header */}
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                bg="white"
                zIndex="1000"
                // p={6}
                boxShadow="md"
            >
                <Box display='flex' flexDirection="column" maxW="95%" mx="auto" p='1%' >
                    <Box display='flex' justifyContent="space-between" alignItems="center" mt={2}>
                        <HStack>
                            <Button
                                onClick={() => window.history.back()}
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
                        </HStack>

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
                                    <Flex gap={10} alignItems='center'><Image src="/img/eye.png" alt="eye" w='16px'
                                                                              h='12px'/><Text
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

                    <HStack fontSize="sm" color="gray.500" mt={6}>
                        <Text fontSize="sm" fontWeight={200} cursor="pointer"
                              _hover={{textDecoration: "underline"}}>Estates</Text>
                        <ChevronRightIcon color='#979797' size={14}/>
                        <Text fontWeight={400} fontSize="sm">{estate.name}</Text>
                    </HStack>
                    <Box w="full" borderBottom="1px solid #F0F0F0" />
                </Box>
            </Box>

            {/* Scrollable Content */}
            {/*<Box mt="100px" bg="white" display='flex' flexDirection="column" maxW="95%" p='1%'>*/}
            {/*    <Tabs variant="enclosed" colorScheme="green">*/}
            {/*        <TabList overflowX="auto">*/}
            {/*            <Tab>Details</Tab>*/}
            {/*            <Tab>Properties</Tab>*/}
            {/*            <Tab>Allocation</Tab>*/}
            {/*            <Tab>Prospects</Tab>*/}
            {/*            <Tab>Activity</Tab>*/}
            {/*        </TabList>*/}

                    {/*<TabPanels>*/}
                    {/*    <TabPanel>*/}
                    {/*        <Flex gap={4} overflowX="auto" mb={6}>*/}
                    {/*            {estate.images.map((image, index) => (*/}
                    {/*                <Box key={index} position="relative">*/}
                    {/*                    <Image*/}
                    {/*                        src={image.url}*/}
                    {/*                        alt={image.label}*/}
                    {/*                        borderRadius="md"*/}
                    {/*                        boxSize={{base: "150px", md: "200px"}}*/}
                    {/*                    />*/}
                    {/*                    <Text*/}
                    {/*                        position="absolute"*/}
                    {/*                        bottom={2}*/}
                    {/*                        left={2}*/}
                    {/*                        bg="gray.800"*/}
                    {/*                        color="white"*/}
                    {/*                        p={1}*/}
                    {/*                        borderRadius="md"*/}
                    {/*                        fontSize="sm"*/}
                    {/*                    >*/}
                    {/*                        {image.label}*/}
                    {/*                    </Text>*/}
                    {/*                </Box>*/}
                    {/*            ))}*/}
                    {/*        </Flex>*/}

                    {/*        <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)"}} gap={4} mb={4}>*/}
                    {/*            <GridItem><Text><b>Type:</b> {estate.type}</Text></GridItem>*/}
                    {/*            <GridItem><Text><b>Location:</b> {estate.location}</Text></GridItem>*/}
                    {/*            <GridItem><Text><b>City:</b> {estate.city}</Text></GridItem>*/}
                    {/*            <GridItem><Text><b>Address:</b> {estate.address}</Text></GridItem>*/}
                    {/*            <GridItem><Text><b>Completion Status:</b> {estate.completionStatus}</Text></GridItem>*/}
                    {/*            <GridItem><Text><b>Land Size:</b> {estate.landSize}</Text></GridItem>*/}
                    {/*        </Grid>*/}

                    {/*        <Text>*/}
                    {/*            {showMore ? estate.description : `${estate.description.substring(0, 150)}... `}*/}
                    {/*            <Button size="sm" colorScheme="blue" variant="link"*/}
                    {/*                    onClick={() => setShowMore(!showMore)}>*/}
                    {/*                {showMore ? "Read Less" : "Read More"}*/}
                    {/*            </Button>*/}
                    {/*        </Text>*/}

                    {/*        {estate.videoUrl && (*/}
                    {/*            <Box mt={4}>*/}
                    {/*                <a href={estate.videoUrl} target="_blank" rel="noopener noreferrer">*/}
                    {/*                    <Button colorScheme="blue">Watch Video</Button>*/}
                    {/*                </a>*/}
                    {/*            </Box>*/}
                    {/*        )}*/}
                    {/*    </TabPanel>*/}
                    {/*</TabPanels>*/}
            {/*    </Tabs>*/}
            {/*</Box>*/}
                        <Box mt="100px" bg="white" display="flex" flexDirection="column" maxW="95%" p="1%">
                            <EstateTabs estate={estate} />
                         </Box>
        </Box>
    );
};

export default EstateDetailsHeader;
