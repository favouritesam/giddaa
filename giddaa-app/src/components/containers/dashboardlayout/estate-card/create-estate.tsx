"use client"
import React, {useState} from "react";
import {
    Box,
    Button,
    Input,
    Textarea,
    Image,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Text,
    Center,
    Flex,
    IconButton, Menu, MenuButton, MenuList,
    MenuItem
} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {ChevronDownIcon, Edit2,Trash} from "lucide-react";

type EstateDataType = {
    name: string;
    state: string;
    city: string;
    address: string;
    landmark: string;
    estateLand: string;
    completionStatus: string;
    videoUrl: string;
    floors: number;
    description: string;
    images: string[];  // Explicitly define images as string array
};

export default function CreateEstate() {
    const [estateData, setEstateData] = useState<EstateDataType>({
        name: "",
        state: "",
        city: "",
        address: "",
        landmark: "",
        estateLand: "",
        completionStatus: "Completed",
        videoUrl: "",
        floors: 1,
        description: "",
        images: [],
    });
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setEstateData({...estateData, [e.target.name]: e.target.value});
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setEstateData({...estateData, images: [...estateData.images, ...files]});
        }
    };

    const handleDelete = (index: number) => {
        setEstateData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index), // Remove image from list
        }));
    };

    const handleEdit = (index: number) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (e: any) => {
            const file = e.target.files[0];
            if (file) {
                const newImageURL = URL.createObjectURL(file);
                setEstateData((prevData) => {
                    const newImages = [...prevData.images];
                    newImages[index] = newImageURL; // Replace the image
                    return {...prevData, images: newImages};
                });
            }
        };
        fileInput.click();
    };
    const statesWithCities = {
        Germany: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
        USA: ["New York", "Los Angeles", "Chicago", "Houston"],
        Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
        UK: ["London", "Manchester", "Birmingham", "Liverpool"]
    };

    const defaultCities = ["Berlin", "New York", "Toronto", "London"]; // Default cities when no state is selected

    const handleStateChange = (selectedState: keyof typeof statesWithCities) => {
        setEstateData((prev) => ({
            ...prev,
            state: selectedState,
            city: "", // Reset city when state changes
        }));
    };

    const handleCityChange = (selectedCity: string) => {
        setEstateData((prev) => ({
            ...prev,
            city: selectedCity,
        }));
    };
    const completionStatusOptions = ["Completed", "Under Construction", "Planned", "On Hold"];

    return (
        <Box overflowX="hidden"
             flexDirection={{base: "column", md: "row"}}
             py={16}
             w="100%"
             maxW="95%"
             mx="auto"
             px={{base: 4, md: 10, lg: 16}}>

            <HStack display='flex' gap='2%' mb='4%'>
                <Button
                    onClick={() => router.push("/")}
                    variant="outline"
                    w='81px'
                    h='32px'
                    borderRadius="5px"
                    border='2px solid #335F32'
                    bg='#FFFFFF'
                    color="#335F32"
                    _hover={{bg: "#335F32", color: "#FFFFFF"}}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={10}
                    fontWeight={700}
                    fontSize='13px'
                    cursor='pointer'
                >
                    <Image src="/img/buttonArrow.png" alt="Back" w='12px' h='12px'/>
                    Back
                </Button>

                <Box fontSize="2xl" fontWeight="bold" color='#000000'>
                    Creating Estate
                </Box>
            </HStack>

            <Box w="full" borderBottom="1px solid #F0F0F0"/>
            <Center
                w={{base: "90%", md: "80%", lg: "1139px"}}
                h={{base: "150px", md: "282px", lg: "229px"}}
                border="1px solid #D9D9D9"
                rounded="lg"
                bg="#FAFFFA"
                flexDirection="column"
                borderRadius="8px"
                mt='2%'
                gap={{base: 2, md: 4}}
            >
                <Input type="file" multiple onChange={handleFileUpload} hidden id="imageUpload"/>

                <label htmlFor="imageUpload" className="cursor-pointer">
                    <Flex direction="column" align="center">
                        <Image
                            src="/img/addVideo.png"
                            alt="addVideo"
                            w={{base: "20px", md: "48px"}}
                            h={{base: "22px", md: "50px"}}
                            mt="10px"
                            cursor="pointer"
                        />
                        <Text
                            color="#335F32"
                            fontWeight={700}
                            fontSize="10px"
                            mb={10}
                        >
                            ADD ESTATE IMAGES
                        </Text>
                    </Flex>
                </label>
            </Center>

            <HStack spacing={4} overflowX="auto">
                {estateData.images.map((img, idx) => (
                    <Box key={idx} position="relative">

                        <Image
                            src={img}
                            w="60px"
                            h="52px"
                            mt='20%'
                            objectFit="cover"
                            borderRadius="5px"
                            alt="Estate"
                        />

                        <Flex
                            position="absolute"
                            top="40px"
                            left="20%"
                            p={1}
                            border='none'
                            gap={2}
                        >
                            <IconButton
                                width="19px"
                                height="19px"
                                icon={<Edit2 size={12}/>}
                                aria-label="Edit Image"
                                onClick={() => handleEdit(idx)}
                                bg="#FFFFFF"
                                borderRadius='8px'
                                border='none'
                            />
                            <IconButton
                                width="19px"
                                height="19px"
                                icon={<Trash size={12} color="red"/>}
                                aria-label="Delete Image"
                                onClick={() => handleDelete(idx)}
                                bg="#FFFFFF"
                                borderRadius='8px'
                                border='none'
                            />
                        </Flex>

                        <Text
                            fontSize="10px"
                            fontWeight="bold"
                            textAlign="center"
                            color="#335F32"
                            mt={1}
                        >
                            {idx % 2 === 0 ? "Bedroom 1" : "Parlor"} {/* Alternating labels */}
                        </Text>
                    </Box>
                ))}
            </HStack>

            {/* Form Inputs */}
            <VStack align="stretch" mt='2%'>
                <Flex
                    alignItems="center"
                    gap='4%'
                    flexWrap="wrap"
                >

                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>Name<span style={{color: "red"}}>*</span> </FormLabel>
                        <Input
                            name="name"
                            value={estateData.name}
                            onChange={handleInputChange}
                            sx={{
                                width: "280px",
                                height: "20px",
                                borderRadius: "100px",
                                border: "1px solid #D0D5DD",
                                padding: "10px",
                            }}
                        />
                    </FormControl>

                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>
                            State <span style={{color: "red"}}>*</span>
                        </FormLabel>
                        <Menu placement="bottom-end">
                            <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon/>}
                                sx={{
                                    width: "300px",
                                    height: "42px",
                                    borderRadius: "100px",
                                    border: "1px solid #D0D5DD",
                                    padding: "10px",
                                    textAlign: "left",
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                }}
                            >
                                {estateData.state || "Select State"}
                            </MenuButton>
                            <MenuList p="12px" bg="white" borderRadius='15px'
                                      border='1px #E1E1E1 solid' cursor='pointer' matchWidth minW="auto">
                                {Object.keys(statesWithCities).map((state) => (
                                    <Box key={state} onClick={() => handleStateChange(state)}>
                                        {state}
                                    </Box>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>

                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>
                            City <span style={{color: "red"}}>*</span>
                        </FormLabel>
                        <Menu placement="bottom-end">
                            <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon/>}
                                sx={{
                                    width: "300px",
                                    height: "42px",
                                    borderRadius: "100px",
                                    border: "1px solid #D0D5DD",
                                    padding: "10px",
                                    textAlign: "left",
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                }}
                            >
                                {estateData.city || "Select City"}
                            </MenuButton>
                            <MenuList p="12px" bg="white" borderRadius='15px'
                                      border='1px #E1E1E1 solid' cursor='pointer' matchWidth minW="auto">
                                {(estateData.state ? statesWithCities[estateData.state] : defaultCities).map((city) => (
                                    <Flex display='column' gap={20} key={city} onClick={() => handleCityChange(city)}>
                                        {city}
                                    </Flex>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>

                    {/* Address Input */}
                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>Address <span style={{color: "red"}}>*</span></FormLabel>
                        <Input
                            name="address"
                            value={estateData.address}
                            onChange={handleInputChange}
                            sx={{
                                width: "280px",
                                height: "20px",
                                borderRadius: "100px",
                                border: "1px solid #D0D5DD",
                                padding: "10px",
                            }}
                        />
                    </FormControl>
                </Flex>

                <Flex alignItems="center" gap='4%' flexWrap="wrap" mt='2%'>
                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>Popular Landmark</FormLabel>
                        <Input
                            name="Popular Landmark"
                            value={estateData.landmark}
                            onChange={handleInputChange}
                            sx={{
                                width: "280px",
                                height: "20px",
                                borderRadius: "100px",
                                border: "1px solid #D0D5DD",
                                padding: "10px",
                            }}
                        />
                    </FormControl>

                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>Estate Land (in Hectares)</FormLabel>
                        <Input
                            name="Estate Land"
                            value={estateData.estateLand}
                            onChange={handleInputChange}
                            sx={{
                                width: "280px",
                                height: "20px",
                                borderRadius: "100px",
                                border: "1px solid #D0D5DD",
                                padding: "10px",
                            }}
                        />
                    </FormControl>


                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>
                            Completion Status <span style={{color: "red"}}>*</span>
                        </FormLabel>
                        <Menu placement="bottom-end">
                            <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon/>}
                                sx={{
                                    width: "300px",
                                    height: "42px",
                                    borderRadius: "100px",
                                    border: "1px solid #D0D5DD",
                                    padding: "10px",
                                    textAlign: "left",
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                }}
                            >
                                {estateData.completionStatus || "Select Status"}
                            </MenuButton>
                            <MenuList
                                p="12px"
                                bg="white"
                                borderRadius="15px"
                                border="1px #E1E1E1 solid"
                                cursor="pointer"
                                minW="auto"
                            >
                                {completionStatusOptions.map((status) => (
                                    <MenuItem p="4px" bg="white" borderRadius='15px'
                                              border='none' cursor='pointer' matchWidth minW="auto"
                                              key={status}
                                              onClick={() => handleInputChange({
                                                  target: {
                                                      name: "completionStatus",
                                                      value: status
                                                  }
                                              })}
                                    >
                                        {status}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </FormControl>

                    <HStack>
                        <FormControl w="270px">
                            <FormLabel fontSize="sm" mb='8px'>Video URL</FormLabel>
                            <Input
                                name="videoUrl"
                                value={estateData.videoUrl}
                                onChange={handleInputChange}
                                sx={{
                                    width: "280px",
                                    height: "20px",
                                    borderRadius: "100px",
                                    border: "1px solid #D0D5DD",
                                    padding: "10px",
                                }}
                            />
                        </FormControl>
                    </HStack>
                </Flex>


                <HStack mt='2%'>
                    <FormControl w="270px">
                        <FormLabel fontSize="sm" mb='8px'>Number of Floors</FormLabel>
                        <Input
                            type="number"
                            name="floors"
                            value={estateData.floors}
                            onChange={handleInputChange}
                            sx={{
                                width: "280px",
                                height: "20px",
                                borderRadius: "100px",
                                border: "1px solid #D0D5DD",
                                padding: "10px",
                            }}
                        />
                    </FormControl>
                </HStack>

                <FormControl w="400px" maxW="100%">
                    <FormLabel fontSize="sm" mb="8px">
                        Description <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <Textarea
                        name="description"
                        value={estateData.description}
                        onChange={handleInputChange}
                        sx={{
                            width: "100%",
                            minHeight: "150px",
                            maxHeight: "300px",
                            borderRadius: "15px",
                            border: "1px solid #D0D5DD",
                            padding: "10px",
                            resize: "vertical",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                        }}
                    />
                </FormControl>


            </VStack>

            <Center bg='#F0F0F0' h='67px' mt='1%' gap={10}>
                <Button w='70px' h='39px' borderRadius='100px' border='1px solid #346633' color='#346633' variant="outline" onClick={() => router.push("/")}>Cancel</Button>
                <Button w='113px' h='39px' borderRadius='100px'border='none' bg='#346633' color='#FFFFFF'>Create Estate</Button>
            </Center>
        </Box>
    );
}
