"use client"
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import PaginatedEstateList from "@/components/containers/dashboardlayout/estate-card/paginated-estateList";
import {Plus} from "lucide-react";
import {useRouter} from "next/navigation";

interface EstateListProps {
    onCreateEstateClick: () => void;
}

 const EstateList = ({ onCreateEstateClick }: EstateListProps) => {
    const estates = [
        { name: "Paradise Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 16, Image: "/img/estate.png" },
        { name: "Sunset Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 20, Image: "/img/estate.png" },
        { name: "Greenland Estate", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 25, Image: "/img/estate.png" },
        { name: "Maple Residency", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 18, Image: "/img/estate.png" },
        { name: "Ocean View", address: "No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja No 13 Fisher Street, Wuse II, Federal Capital Territory, Abuja", houses: 22, Image: "/img/estate.png" },
    ];


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
                            onClick={onCreateEstateClick}
                    >
                        Create Estate
                    </Button>
                </Flex>
            </Flex>
            <PaginatedEstateList estates={estates} itemsPerPage={2} />
        </Box>
    );
}
export default EstateList;





// "use client";
// import { Box, Button, Flex, Text, Input, Spinner } from "@chakra-ui/react";
// import PaginatedEstateList from "@/components/containers/dashboardlayout/estate-card/paginated-estateList";
// import { Plus } from "lucide-react";
// import React, { useEffect, useState } from "react";
//
// interface Estate {
//     name: string;
//     address: string;
//     houses: number;
//     Image: string;
// }
//
// interface EstateListProps {
//     onCreateEstateClick: () => void;
// }
//
// const EstateList = ({ onCreateEstateClick }: EstateListProps) => {
//     const [estates, setEstates] = useState<Estate[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [pageNumber, setPageNumber] = useState<number>(1);
//     const [pageSize, setPageSize] = useState<number>(10);
//     const [search, setSearch] = useState<string>("");
//     const [isClient, setIsClient] = useState<boolean>(false);
//
//     useEffect(() => {
//         setIsClient(true); // Mark the component as client-side rendered
//     }, []);
//
//     useEffect(() => {
//         if (!isClient) return; // Skip fetching on the server
//
//         const fetchEstates = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await fetch(
//                     `https://dev-api.giddaa.com/developer/estate/get-all?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
//                     {
//                         method: "GET",
//                         headers: {
//                             "Content-Type": "application/json",
//                             Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
//                         },
//                     }
//                 );
//
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch estates");
//                 }
//
//                 const data = await response.json();
//                 setEstates(data.value);
//             } catch (error) {
//                 console.error("Error fetching estates:", error);
//                 setError("Failed to fetch estates. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchEstates();
//     }, [pageNumber, pageSize, search, isClient]);
//
//     const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setSearch(event.target.value);
//     };
//
//     if (!isClient) {
//         return null; // Render nothing on the server
//     }
//
//     return (
//         <Box p={4}>
//             <Flex justify="space-between" mt="4%">
//                 <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={700} color="#000000">
//                     Estates - {estates.length}
//                 </Text>
//                 <Flex justify="flex-end" gap={4}>
//                     <Input
//                         placeholder="Search estates..."
//                         value={search}
//                         onChange={handleSearchChange}
//                         width="200px"
//                         borderRadius="100px"
//                         border="1px solid #346633"
//                         px={4}
//                     />
//                     <Button
//                         leftIcon={<Plus size={20} />}
//                         bg="#346633"
//                         color="#FFFFFF"
//                         border="none"
//                         borderRadius="100px"
//                         w="125px"
//                         h="40px"
//                         fontSize="13px"
//                         fontWeight={700}
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         px={4}
//                         cursor="pointer"
//                         onClick={onCreateEstateClick}
//                     >
//                         Create Estate
//                     </Button>
//                 </Flex>
//             </Flex>
//
//             {loading ? (
//                 <Flex justify="center" align="center" height="200px">
//                     <Spinner size="xl" />
//                 </Flex>
//             ) : error ? (
//                 <Text color="red.500" textAlign="center">
//                     {error}
//                 </Text>
//             ) : (
//                 <PaginatedEstateList
//                     estates={estates}
//                     itemsPerPage={pageSize}
//                     onPageChange={(newPage: number) => setPageNumber(newPage)}
//                 />
//             )}
//         </Box>
//     );
// };
//
// export default EstateList;