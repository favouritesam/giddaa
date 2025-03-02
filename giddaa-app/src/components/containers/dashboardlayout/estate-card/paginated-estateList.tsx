'use client'
// @ts-ignore
import Pagination from "@/components/containers/dashboardlayout/estate-card/pagination";
import EstateCard from "@/components/containers/dashboardlayout/estate-card/estate-card";
import {Box, Flex} from "@chakra-ui/react";
import React, {useState} from "react";

type Estate = {
    name: string;
    address: string;
    houses: number;
    Image: string;
};


interface PaginatedEstateListProps {
    estates: Estate[];
    itemsPerPage: number;
}

const PaginatedEstateList: React.FC<PaginatedEstateListProps> = ({ estates, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(estates.length / itemsPerPage);

    const handlePageChange = (page:number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const displayedEstates = estates.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const remainingItems = estates.length - currentPage * itemsPerPage;

    return (
        <Box>
            <Flex wrap="wrap" gap={20} justify={{ base: "center", md: "flex-start" }}>
                {displayedEstates.map((estate,index) => (
                    <EstateCard key={index} estate={estate} />
                ))}
            </Flex>
            {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    remainingItems={remainingItems > 0 ? remainingItems : 0}
                />
            )}
        </Box>
    );
};

export default PaginatedEstateList;
