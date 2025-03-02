import { Box, Text, Input, Img, Image, Divider, Button } from "@chakra-ui/react";
import downloadIcon from "../assets/icon.svg";
import { useContext, useState, useRef } from "react";
import TicketContext from "../TicketsContext";
import { useDropzone } from "react-dropzone";
import AttendeeInfo from "./AttendeeInfo";

export default function Attendee() {
  const { step, ticketTypes, selectedTicket, handleStep, handleBack } = useContext(TicketContext);
  const [showImage, setShowImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      );
      setShowImage(true);
      console.log(acceptedFiles);
    }
  });

  const images = files.map(file => (
    <Box key={file.path} width={"100%"} height={"100%"} pb={2}>
      <Image key={file.name} src={file.preview} alt="the img"
        w={"100%"} height={"100%"} objectFit={"fill"} borderRadius={"30%"} />
    </Box>
  ));

  const attendeeInfoRef = useRef();

  const handleShowReady = () => {
    if (files.length === 0) {
      setErrorMessage('Please upload a profile photo');
      return;
    }
    attendeeInfoRef.current.submitForm();
  };

  return (
    <Box color={"whiteAlpha.900"} mt={10} w={800} border={'1px solid #07373F'} borderRadius={30}
      p={12} pt={5} bg={'#05252C'}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}
        bgGradient={'linear(to-r, #0E464F 30%, transparent 70%)'}>
        <Text fontSize={"2.5em"} fontFamily="JejuMyeongjo" fontWeight="Regular">Attendee Details</Text>
          <Text fontSize="lg" mb={2}>Step {step} / 3</Text>
      </Box>

      <Box w={"100%"} border={'1px solid #0E464F'} mt={4} p={10} borderRadius={30}>

        {/* upload images box */}
        <Box border={'1px solid #07373F'} bg={'#052228'} p={7} borderRadius={30}>
          <Box><Text fontFamily="Roboto" fontWeight="normal" fontSize={"1.2em"}> Upload Profile Photo</Text></Box>
          <Box mt={10} bg={'#041E23'}
            display={"grid"} placeItems={"center"}>
            <Box {...getRootProps()} borderRadius={30} w={250} h={250}
              bg={'#0E464F'} display={"flex"} flexDir={"column"} justifyContent={"center"} p={12} cursor={"pointer"}>
              <Input {...getInputProps()} style={{ display: 'none' }} />
              <Box display={"flex"} flexDir={"column"} alignItems={"center"}
                justifyContent={"center"} textAlign={"center"} >
                <Img src={downloadIcon} w={30} pb={1} />
                <Text>Drag & drop or click to upload</Text>
              </Box>
              {showImage &&
                (<Box display={"flex"} flexDir={"column"} alignItems={"center"} w={"100%"} h={"100%"} pt={4}>
                  {images}
                </Box>)}
            </Box>
          </Box>
          <Box color={"red"} mt={5}>{errorMessage}</Box>
        </Box>
        <Divider color={"#07373F"} mt={8} borderWidth={'2px'} />
        <AttendeeInfo ref={attendeeInfoRef} handleStep={handleStep} />
      </Box>
      <Box w={"100%"} display={"flex"} justifyContent={"space-around"} mt={10}
      border={" 1px solid  #24A0B5"} borderRadius={30}>
        <Button w={"42%"} h={50} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
          _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} onClick={handleBack}>Back</Button>
        <Button w={"42%"} h={50} bg={"transparent"} border={'1px solid #24A0B5'} color={'#24A0B5'}
          _hover={{ bg: '#24A0B5', color: '#FFFFFF' }} onClick={handleShowReady}>Get My {selectedTicket ? selectedTicket.price : 'Ticket'} Ticket </Button>
      </Box>
    </Box>
  );
}