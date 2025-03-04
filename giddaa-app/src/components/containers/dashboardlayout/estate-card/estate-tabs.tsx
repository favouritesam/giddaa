// "use client";
//
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { useRouter, usePathname } from "next/navigation";
//
// const EstateTabs = ({ estate }: { estate: any }) => {
//     const router = useRouter();
//     const pathname = usePathname();
//
//     const tabs = [
//         { label: "Details", path: "details" },
//         { label: "Properties", path: "properties" },
//         { label: "Allocation", path: "allocation" },
//         { label: "Prospects", path: "prospects" },
//         { label: "Activity", path: "activity" }
//     ];
//
//     const currentTabIndex = tabs.findIndex((t) => pathname.endsWith(t.path)) || 0;
//
//     return (
//         <Tabs
//             index={currentTabIndex}
//             onChange={(index) => router.push(`/estate/${estate.id}/${tabs[index].path}`)}
//             variant="enclosed"
//             colorScheme="green"
//         >
//             <TabList>
//                 {tabs.map((t) => (
//                     <Tab key={t.path}>{t.label}</Tab>
//                 ))}
//             </TabList>
//
//             <TabPanels>
//                 {tabs.map((t) => (
//                     <TabPanel key={t.path}>
//                         <p>{t.label} Content</p>
//                     </TabPanel>
//                 ))}
//             </TabPanels>
//         </Tabs>
//     );
// };
//
// export default EstateTabs;

"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import DetailsTab from "@/components/containers/dashboardlayout/estate-card/details-tab";

const EstateTabs = ({ estate }: { estate: any }) => {
    const router = useRouter();
    const pathname = usePathname();

    const tabs = [
        { label: "Details", path: "details" },
        { label: "Properties", path: "properties" },
        { label: "Allocation", path: "allocation" },
        { label: "Prospects", path: "prospects" },
        { label: "Analytics", path: "analytics" },
        { label: "Activity", path: "activity" },
    ];

    // Default to index 0 if no match is found
    const currentTabIndex = Math.max(0, tabs.findIndex((t) => pathname.endsWith(t.path)));

    return (
        <Box w="full">
            <Tabs
                index={currentTabIndex}
                onChange={(index) => router.push(`/estate/${estate.id}/${tabs[index].path}`)}
            >
                <TabList
                    borderBottom="1px solid #E0E0E0"
                    display="flex"
                    justifyContent='space-between'
                    mb='2%'
                    gap={6}
                    width="fit-content"
                    maxW="100%"
                    whiteSpace="nowrap"
                >
                    {tabs.map((t, index) => (
                        <Tab
                            key={t.path}
                            fontWeight={currentTabIndex === index ? "bold" : "normal"}
                            color={currentTabIndex === index ? "#335F32" : "#A0A0A0"}
                            position="relative"
                            border='none'
                            bg="transparent"
                            flex="none"
                            _after={{
                                content: '""',
                                position: "absolute",
                                bottom: "-1px",
                                width: "100%",
                                height: "2px",
                                bg: currentTabIndex === index ? "#335F32" : "transparent",
                            }}
                            _hover={{ color: "#335F32" }}
                        >
                            {t.label}
                        </Tab>
                    ))}
                </TabList>


                <TabPanels>
                    {tabs.map((t) => (
                        <TabPanel key={t.path} p={0}>
                            {t.path === "details" && <DetailsTab estate={estate} />}
                            {t.path !== "details" && (
                                <Box color="#A0A0A0" fontSize="sm">
                                    No content available for {t.label}.
                                </Box>
                            )}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default EstateTabs;
