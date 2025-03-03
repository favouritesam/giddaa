"use client"
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import PaginatedEstateList from "@/components/containers/dashboardlayout/estate-card/paginated-estateList";
import {Plus} from "lucide-react";
import {useRouter} from "next/navigation";

export default function EstateList() {
    const estates = [
        { name: "Paradise Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 16, Image: "/img/estate.png" },
        { name: "Sunset Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 20, Image: "/img/estate.png" },
        { name: "Greenland Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 25, Image: "/img/estate.png" },
        { name: "Maple Residency", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 18, Image: "/img/estate.png" },
        { name: "Ocean View", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 22, Image: "/img/estate.png" },
    ];
    const router = useRouter();

    return (
        <Box p={4}>
            <Flex justify='space-between' mt='4%'>
                <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={700} color='#000000'>
                    Estates - {estates.length}
                </Text>
                <Flex justify="flex-end">
                    <Button leftIcon={<Plus size={20} />}
                            bg="#346633"
                            color="#FFFFFF"
                            border="none"
                            borderRadius="100px"
                            w="125px"
                            h="40px"
                            fontSize="13px"
                            fontWeight={700}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            px={4}
                            cursor="pointer"
                            onClick={() => router.push("/create-estate")}
                    >
                        Create Estate
                    </Button>
                </Flex>
            </Flex>
            <PaginatedEstateList estates={estates} itemsPerPage={3} />
        </Box>
    );
}
