"use client";

import {Box, Text, Image, Flex, Button, Grid, GridItem, Divider} from "@chakra-ui/react";
import React, { useState } from "react";

interface Estate {
    id: number;
    name: string;
    type: string;
    location: string;
    city: string;
    address: string;
    popularLandmark: string;
    landSize: string;
    completionStatus: string;
    videoUrl: string;
    description: string;
    numberOfFloors: string;
    images: { url: string; label: string }[];
}

interface DetailsTabProps {
    estate: Estate;
}

const DetailsTab: React.FC<DetailsTabProps> = ({ estate }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <Box>
            <Flex gap={14} overflowX="auto" mb={6}>
                {estate.images.map((image, index) => (
                    <Box key={index} position="relative">
                        <Image
                            // src={image.url}
                            src="/img/best.png"
                            alt={image.label}
                            borderRadius="md"
                            boxSize={{ base: "150px", md: "200px" }}
                        />

                        <Text
                            position="absolute"
                            bottom={2}
                            left={2}
                            bg="gray.800"
                            color="white"
                            p={1}
                            borderRadius="md"
                            fontSize="sm"
                        >
                            {image.label}
                        </Text>
                    </Box>
                ))}
            </Flex>

            <Flex align="center" w="full">
                <Text fontSize="lg" fontWeight="bold" whiteSpace="nowrap">
                    Estate Details
                </Text>
                <Box flex="1" height="1px" bg="#E0E0E0" ml={2} />
            </Flex>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} mb={4}>
                <Flex justify="space-between">
                    <GridItem><Text><b>Name:</b> {estate.type}</Text></GridItem>
                    <GridItem><Text><b>State:</b> {estate.location}</Text></GridItem>
                    <GridItem><Text><b>City:</b> {estate.city}</Text></GridItem>
                    <GridItem><Text><b>Address:</b> {estate.address}</Text></GridItem>
                </Flex>
                <Flex justify="space-between">
                    <GridItem><Text><b>Popular Landmark:</b> {estate.popularLandmark}</Text></GridItem>
                    <GridItem><Text><b>landSize:</b> {estate.landSize}</Text></GridItem>
                    <GridItem><Text><b>Completion Status:</b> {estate.completionStatus}</Text></GridItem>
                    <GridItem><Text><b>videoUrl:</b> {estate.videoUrl}</Text></GridItem>
                </Flex>
                <GridItem><Text><b>Number of Floors:</b> {estate.numberOfFloors}</Text></GridItem>
            </Grid>

            <Box w="584px" h="150px">
                <Text fontSize="lg" fontWeight="bold" mb={1}>Description</Text>
                <Flex
                    w="100%"
                    h="100%"
                    overflowY="auto"
                    p={2}
                    border="none"
                    fontSize="smaller"
                    fontWeight={100}
                    borderRadius="md"
                    align="start"
                >
                    <Text>
                        {showMore ? estate.description : `${estate.description.substring(0, 150)}... `}
                        <Box
                            as="span"
                            fontSize="small"
                            fontWeight="bold"
                            cursor="pointer"
                            ml='2%'
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </Box>
                    </Text>
                </Flex>
            </Box>
            {/*/!* Video Link *!/*/}
            {/*{estate.videoUrl && (*/}
            {/*    <Box mt={4}>*/}
            {/*        <a href={estate.videoUrl} target="_blank" rel="noopener noreferrer">*/}
            {/*            <Button colorScheme="blue">Watch Video</Button>*/}
            {/*        </a>*/}
            {/*    </Box>*/}
            {/*)}*/}
        </Box>
    );
};

export default DetailsTab;
