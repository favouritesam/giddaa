import { notFound } from "next/navigation";
import DetailsTab from "@/components/containers/dashboardlayout/estate-card/details-tab";

const EstateTabPage = ({ params }: { params: { id: string; tab: string } }) => {
    const { id, tab } = params;

    // Mock data for testing (Replace with API call)
    const estate = {
        id: 1,
        name: "Luxury Estate",
        type: "Residential",
        location: "Downtown",
        city: "New York",
        address: "123 Main Street",
        popularLandmark: "NNPC Fueling Station",
        landSize: "5000 sqft",
        completionStatus: "Completed",
        videoUrl: "https://example.com/video",
        numberOfFloors: "2 Floors",
        description: "A beautiful estate with modern amenities and green surroundings.",
        images: [
            { url: "https://via.placeholder.com/200", label: "Front View" },
            { url: "https://via.placeholder.com/200", label: "Living Room" },
        ],
    };

    if (!id || !tab) return notFound();

    return (
        <div>
            {tab === "details" && <DetailsTab estate={estate} />}
            {tab !== "details" && <h1>{tab} Content for Estate {id}</h1>}
        </div>
    );
};

export default EstateTabPage;

