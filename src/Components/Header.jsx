import { Box,Button,Img,Text  } from '@chakra-ui/react'
import ticket from '../assets/ticket.svg'
export default function Header (){
    return (
    <Box display={'flex'} width={'90%'} margin={'auto'} justifyContent={'space-between'} 
    alignContent={'center'} pr={2} pl={2} pt={1} pb={1} borderRadius={15}  border={'1px solid #24A0B5'} opacity={'100%'}
    bg={'#05252C'}>
        <Box  display={'flex'} alignItems={'center'}  >
            <Box p={2} roundedLeft={15} roundedRight={15}  border={'1px solid #24A0B5'} bg={'#052F35'}>
                <Img src={ticket} alt="ticket image" w={30}  />
            </Box>
            <Text fontSize={'2em'} pl={2} pb={1} fontWeight={600} color={'#0E464F'} textShadow={'-1px 0px #FFFFFF, 1px 0px #FFFFFF, 0px -1px #FFFFFF, 0px 1px #FFFFFF'}
            >ticz</Text>
        </Box>
        <Box display={'flex'}  alignItems={'center'}>
            <Text pr={6} color={'#FFFFFF'}>Events</Text>
            <Text pr={6} color={'#B3B3B3'}>My Tickets</Text>
            <Text pr={6} color={'#B3B3B3'}>About Project</Text>
        </Box>
       
            <Button mt={1} >
                <Text>My Tickets</Text>
            </Button>
        
    </Box>)
}