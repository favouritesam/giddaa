"use client";

import { Box } from "@chakra-ui/react";
import EstateDetailsHeader from "@/components/containers/dashboardlayout/estate-card/estate-details-header";

const mockEstate = {
    id: 1,
    name: "The View Estate",
    type: "Two-Bedroom Apartment",
    location: "Federal Capital Territory",
    city: "Abuja",
    address: "No. 25 Kenzie Kurmash, Abuja",
    popularLandmark: "NNPC Fueling Station",
    completionStatus: "Completed",
    landSize: "2 Hectares",
    description: "The property is a really nice and beautiful place. We think you should  buy " +
        "it because. it is the best thing you could ever buy in" +
        " your life for real just buy this house. It will be good for",
    videoUrl: "https://gddaxyoutube.com",
    numberOfFloors: "2 Floors",
    images: [
        { url: "/img/estate1.jpg", label: "Site View" },
        { url: "/img/estate2.jpg", label: "Actual Image" },
        { url: "/img/estate3.jpg", label: "Site View" }
    ]
};

export default function EstateDetailsPage() {
    return (
        <Box p={8}>
            <EstateDetailsHeader estate={mockEstate} />
        </Box>
    );
}
