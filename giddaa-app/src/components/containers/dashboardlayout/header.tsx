// import {Box, Button, Flex, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
// import {FiBell, FiSearch} from "react-icons/fi";
//
// export default function Header(){
//     return(
//         <Flex h="100vh" w="100vw" overflowX="hidden" flexDirection={{ base: "column", md: "row" }}>
//             <Box flex="1" p={6}>
//                 {/* Header */}
//                 <Flex justify="space-between" align="center" mb={6}>
//                     <Text fontSize="2xl" fontWeight="bold">My Properties</Text>
//                     <Flex gap={4}>
//                         <Input placeholder="Search for anything..." w={{ base: "150px", md: "300px" }} />
//                         <IconButton icon={<FiSearch />} aria-label="Search" />
//                         <IconButton icon={<FiBell />} aria-label="Notifications" />
//                         <Menu>
//                             <MenuButton as={Button}>
//                                 How It Works
//                             </MenuButton>
//                             <MenuList>
//                                 <MenuItem>Product Tour & Guide</MenuItem>
//                                 <MenuItem>Video Tutorial</MenuItem>
//                             </MenuList>
//                         </Menu>
//                         <Button colorScheme="green">+ Create Estate</Button>
//                     </Flex>
//                 </Flex>
//             </Box>
//         </Flex>
//     )
// }