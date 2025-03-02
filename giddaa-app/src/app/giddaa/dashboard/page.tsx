'use client'
import { SetStateAction, useState} from "react";
import DashboardHeader from "@/components/containers/dashboardlayout/dashboard-header";

export default function DashboardPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <DashboardHeader
                // estates={5}
                // houses={15}
                // units={7}
                // onSearch={(value: SetStateAction<string>) => setSearchTerm(value)}
            />

        </div>
    );
}
