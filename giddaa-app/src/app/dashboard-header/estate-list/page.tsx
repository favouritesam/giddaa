"use client";
import {Box} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import EstateList from "@/components/containers/dashboardlayout/estate-card/estate-list-wrapper";

interface EstateListProps {
    onCreateEstateClick?: () => void
}

export default function EstateListPage({onCreateEstateClick}: EstateListProps) {
    const router = useRouter();

    const handleCreateEstateClick = () => {
        router.push("/dashboard-header/create-estate");
    };

    return (
        <Box>
            <EstateList onCreateEstateClick={handleCreateEstateClick}/>
        </Box>
    );
};
