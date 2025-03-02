import { Box } from "@chakra-ui/react";
import { TicketProvider } from "./TicketsContext";


import Visibility from "./Visiblity";




export default function App() {

  return <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
    <TicketProvider>
      <Visibility/>
    </TicketProvider>
  </Box>
}

