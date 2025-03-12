// import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
//
// interface PaginationProps {
//     totalPages: number;
//     currentPage: number;
//     onPageChange: (page: number) => void;
//     remainingItems: number;
// }
// // @ts-ignore
// const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange, remainingItems }) => {
//     return (
//         <Box mt={10}>
//             <Flex align="center" justify="center" gap={2}>
//                 <IconButton
//                     icon={<ChevronLeft size={16}/>}
//                     isDisabled={currentPage === 1}
//                     onClick={() => onPageChange(currentPage - 1)}
//                     bg={currentPage === 1 ? "#F0F0F0" : "#335F32"}
//                     color="white"
//                     _hover={{bg: "green.600"}}
//                     size="sm"
//                     aria-label="Previous page"
//                     borderRadius="4px"
//                     w='22.75px'
//                     h='21.15px'
//                     cursor="pointer"
//                 />
//
//                 <IconButton
//                     icon={<ChevronRight size={16}/>}
//                     isDisabled={currentPage === totalPages}
//                     onClick={() => onPageChange(currentPage + 1)}
//                     bg={currentPage === totalPages ? "#F0F0F0" : "#335F32"}
//                     color="white"
//                     _hover={{bg: "green.600"}}
//                     size="sm"
//                     aria-label="Next page"
//                     borderRadius="4px"
//                     w='22.75px'
//                     h='21.15px'
//                     cursor="pointer"
//                 />
//             </Flex>
//             {remainingItems > 0 && (
//                 <Flex fontSize="11px" fontWeight={400} alignItems="center" justifyContent="center" color='#335F32'>
//                     View {remainingItems} More
//                 </Flex>
//             )}
//         </Box>
//     );
// };
// export default Pagination;
//


import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    remainingItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange, remainingItems }) => {
    return (
        <Box mt={10}>
            {/* Pagination Buttons */}
            <Flex align="center" justify="center" gap={2}>
                {/* Previous Page Button */}
                <IconButton
                    icon={<ChevronLeft size={16} />}
                    aria-label="Previous page"
                    isDisabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    bg={currentPage === 1 ? "gray.200" : "#335F32"}
                    color={currentPage === 1 ? "gray.500" : "white"}
                    _hover={{ bg: currentPage === 1 ? "gray.200" : "green.600" }}
                    size="sm"
                    borderRadius="4px"
                    w="22.75px"
                    h="21.15px"
                    cursor={currentPage === 1 ? "not-allowed" : "pointer"}
                />

                {/* Next Page Button */}
                <IconButton
                    icon={<ChevronRight size={16} />}
                    aria-label="Next page"
                    isDisabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    bg={currentPage === totalPages ? "gray.200" : "#335F32"}
                    color={currentPage === totalPages ? "gray.500" : "white"}
                    _hover={{ bg: currentPage === totalPages ? "gray.200" : "green.600" }}
                    size="sm"
                    borderRadius="4px"
                    w="22.75px"
                    h="21.15px"
                    cursor={currentPage === totalPages ? "not-allowed" : "pointer"}
                />
            </Flex>

            {/* Remaining Items Text */}
            {remainingItems > 0 && (
                <Flex fontSize="11px" fontWeight={400} alignItems="center" justifyContent="center" color="#335F32" mt={2}>
                    View {remainingItems} More
                </Flex>
            )}
        </Box>
    );
};

export default Pagination;