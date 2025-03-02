import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Box, ChakraProvider} from '@chakra-ui/react'
import Header from '../src/Components/Header'

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
      <StrictMode>
      <Box bg={'#052228'} w={'100%'}   minH={'100vh'} pt={5}> 
        <Header />
        <App />
      </Box>
  </StrictMode>,
  </ChakraProvider>

)
