
"use client"
import {Box} from "@chakra-ui/react";
import EstateList from "@/components/containers/dashboardlayout/estate-card/estate-list";
import {useRouter} from "next/navigation";

export default function EstateListPage() {
    const router = useRouter();

    const handleCreateEstateClick = () => {
        router.push("/dashboard-header/create-estate");
    };

    return (
        <Box>
            <EstateList onCreateEstateClick={handleCreateEstateClick}/>
        </Box>
    );
}
