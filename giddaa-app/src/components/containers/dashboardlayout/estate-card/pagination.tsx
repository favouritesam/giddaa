import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    remainingItems: number;
}
// @ts-ignore
const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange, remainingItems }) => {
    return (
        <Box mt={10}>
            <Flex align="center" justify="center" gap={2}>
                <IconButton
                    icon={<ChevronLeft size={16}/>}
                    isDisabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    bg={currentPage === 1 ? "#F0F0F0" : "#335F32"}
                    color="white"
                    _hover={{bg: "green.600"}}
                    size="sm"
                    aria-label="Previous page"
                    borderRadius="4px"
                    w='22.75px'
                    h='21.15px'
                    cursor="pointer"
                />

                <IconButton
                    icon={<ChevronRight size={16}/>}
                    isDisabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    bg={currentPage === totalPages ? "#F0F0F0" : "#335F32"}
                    color="white"
                    _hover={{bg: "green.600"}}
                    size="sm"
                    aria-label="Next page"
                    borderRadius="4px"
                    w='22.75px'
                    h='21.15px'
                    cursor="pointer"
                />
            </Flex>
            {remainingItems > 0 && (
                <Flex fontSize="11px" fontWeight={400} alignItems="center" justifyContent="center" color='#335F32'>
                    View {remainingItems} More
                </Flex>
            )}
        </Box>
    );
};
export default Pagination;

