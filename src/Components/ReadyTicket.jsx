import React from 'react';
import { useContext } from "react";
import { Box, Text, Image, Divider, Button } from "@chakra-ui/react";
import scanCode from "../assets/scanCode.svg";
import TicketContext from "../TicketsContext";

function ReadyTicket() {
  const { step,setStep, formData, selectedTicket, setShowAttendee, setShowReady, setShowTicket, numTickets } = useContext(TicketContext);
  console.log("Rendering ReadyTicket component");

  const bookAnotherTicket = () => {
    setShowAttendee(false);
    setShowReady(false);
    setShowTicket(true);
    setStep(1);
   
  }

  return (
    <Box color={"whiteAlpha.900"} mt={10} w={800}  border={'1px solid #07373F'} borderRadius={30}
    p={12} pt={5} bg={'#041E23'}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
        bgGradient={'linear(to-r, #0E464F 30%, transparent 70%)'}>
          <Text fontSize={"2.5em"} fontWeight={600}>Ready Ticket</Text>
          <Text fontSize="lg" >Step {step} / 3</Text>
      </Box>
      <Box>
          <Box mt={10}>
            <Text textAlign={'center'} fontSize={30}  fontWeight={600}>Your Ticket is Booked!</Text>
            <Text  textAlign={'center'} fontSize={16} mt={2}>You can download or Check your email for a copy</Text>
          </Box>
          
          <Box w={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}  mt={16} p={7}   border={'2px solid #FFFFFF'} borderRadius={10} bg={'#0E464F'}>
            <Image src={scanCode}/>
            <Box >
              <Text fontSize={40} fontWeight={800}> Techember <br />Fest "25</Text>
              <Text>📍  04 Rumens road, Ikoyi Lagos</Text>
              <Text>📅  March 15, 2025 | 7:00 PM</Text>
            </Box>
            <Box flexDir="column" transform="rotate(-90deg)" p={3} border={"2px solid #ffffff"} borderTopWidth={"7px "}  >
              <Text fontWeight={800} fontSize={20}>Techember Fest "25</Text>
              <Text fontSize={13}>Attendee Name : {formData.names}</Text>
              <Text fontSize={13}>Price Ticket: { selectedTicket.price}</Text>
              <Text fontSize={13}>Ticket Entry: { numTickets}</Text>
              <Divider w={"80%"} mt={4} position="absolute" right={0} top={20} border={" 1px solid #052930"} orientation="horizontal"/>
              <Divider w={"95%"}  mt={5} position="absolute" right={0} top={90} border={" 1px solid #052930"} orientation="horizontal"/>
            </Box>
          </Box>
           <Box w={"100%"} display={"flex"} justifyContent={"space-around"} mt={10}
           border={" 1px solid  #24A0B5"} borderRadius={30}>
                  <Button w={"42%"} h={50} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
                    _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} onClick={bookAnotherTicket}>Book Another Ticket</Button>
                  <Button w={"42%"} h={50} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
                    _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} >Download Ticket</Button>
                </Box>
      </Box>
    </Box>
  );
}

export default ReadyTicket;