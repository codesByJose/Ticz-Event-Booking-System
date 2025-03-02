import { Box, Divider, Text, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useContext, useState } from "react";
import TicketContext from "../TicketsContext";

export default function Tickets() {
    const { selectedTicket, setSelectedTicket, step, handleStep, ticketTypes, numTickets, setNumTickets } = useContext(TicketContext);
  
    const [errorMessage, setErrorMessage] = useState('');

    const handleCancel = () => {
        setSelectedTicket(null);
        setNumTickets(1);
        setErrorMessage('');
    }

    const handleNext = () => {
        if (!selectedTicket) {
            setErrorMessage('Please select a ticket type');
            return;
        }
        setErrorMessage('');
        handleStep();
    }

    const handleSelectTicket = (ticket) => {
        setSelectedTicket(ticket);
        setErrorMessage('');
    };

    return (
        <Box color={"whiteAlpha.900"} mt={8} w={800} border={'1px solid #07373F'} borderRadius={30}
            p={12} bg={'#05252C'}>

            <Box borderRadius={30}>
                {/* tickets selection */}
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
                    bgGradient={'linear(to-r, #0E464F 30%, transparent 70%)'} >
                    <Text fontSize={"2.5em"} fontFamily="JejuMyeongjo" fontWeight="regular">Ticket Selection</Text>
                    <Box display={"flex"} fontSize={"1.1em"} borderRadius={30}>
                        <Text pr={2}>Step </Text>
                        <Text> {step}</Text>
                        <Text> /3</Text>
                    </Box>
                </Box>
                {/* main tickets */}
                <Box w={"100%"} border={'1px solid #07373F'} mt={4} p={8} borderRadius={30}>
                    {/* techembebr fest */}
                    <Box bgGradient={'linear-gradient(165deg, #07373F, #0A0C11)'} textAlign={"center"}
                        p={7} borderRadius={30} >
                        <Box>
                            <Text fontSize={"2.8em"} fontFamily="'Road Rage'" fontWeight="normal" mb={2}>Techember Fest "25 </Text>
                            <Text>Join us for an unforgettable experience at <br /> Techember Fest!  Secure your spot</Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} mt={2}>
                            <Text pr={4}>📍  Lagos</Text>
                            <Text pl={4}>March 15, 2025 | 7:00 PM</Text>
                        </Box>
                    </Box>
                    <Divider color={"#07373F"} mt={8} borderWidth={'2px'} />
                    {/* select type */}
                    <Box mt={8}>
                        <p>Select Ticket Type:</p>
                        {/* ticket types */}
                        <Box display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"} gap={5} mt={4} p={4} border={'1px solid #07373F'} borderRadius={20}>
                            {ticketTypes.map(type => (
                                <Box key={type.id} display={"flex"} justifyContent={"space-between"}
                                    p={4} border={'1px solid #07373F'} borderRadius={20} cursor={"pointer"}
                                    bg={selectedTicket && selectedTicket.id === type.id ? '#24A0B5' : 'transparent'}
                                    onClick={() => handleSelectTicket(type)}
                                >
                                    <Box>
                                        <Text>{type.name}</Text>
                                        <Text>20 left!</Text>
                                    </Box>
                                    <Text border={'1px solid #2BA4B9'} fontWeight={700} pl={5} pt={1} pr={2} borderRadius={10} bg={"#0E464F"} fontSize={"1.3em"}>{type.price} </Text>
                                </Box>
                            ))}
                        </Box>
                        {errorMessage && <Text color={"red"} mt={4}>{errorMessage}</Text>}
                    </Box>
                    {/* number of tickets */}
                    <Box mt={6}>
                        <Text mb={4}>Number of Tickets: </Text>
                        <Menu bg={'#07373F'}>
                            <MenuButton as={Button} w={"100%"} bg={'#07373F'} color={"#24A0B5"}
                                _active={{ bg: "#24A0B5", color: "#FFFFFF" }} mb={4} borderRadius={10} h={12}
                                border={'1px solid #07373F'} _hover={{ borderColor: '#24A0B5', color: '#FFFFFF' }}>
                                {numTickets}
                            </MenuButton>
                            <MenuList bg={"#07373F"} borderColor={"#07373F"} p={1} borderRadius={10}>
                                {[...Array(2).keys()].map(num => (
                                    <MenuItem key={num + 1} onClick={() => setNumTickets(num + 1)} bg={'#07373F'}
                                        _hover={{ bg: "#24A0B5", color: "#FFFFFF" }} borderRadius={10}>
                                        {num + 1}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                    {/* cancel / next */}
                    <Box borderRadius={50} display={"flex"} justifyContent={"space-around"} h={'50px'}
                        bg={'#041E23'}>
                        <Button h={50} w={'45%'} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
                            _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} onClick={handleCancel}>Cancel</Button>
                        <Button h={50} w={'45%'} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
                            _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} onClick={handleNext} >Next</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}