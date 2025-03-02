import { createContext, useContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const ticketTypes = [
    { id: 1, name: 'REGULAR ACCESS', price: 'Free' },
    { id: 2, name: 'VIP ACCESS', price: '$50' },
    { id: 3, name: 'VVIP ACCESS', price: '$150' },
  ];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showTicket, setShowTicket] = useState(true);
  const [showAttendee, setShowAttendee] = useState(false);
  const [showReady, setShowReady] = useState(false);
  const [step, setStep] = useState(1);
  const [numTickets, setNumTickets] = useState(1);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (step === 1) {
      setShowTicket(true);
      setShowAttendee(false);
      setShowReady(false);
    } else if (step === 2) {
      setShowTicket(false);
      setShowAttendee(true);
      setShowReady(false);
    } else if (step === 3) {
      setShowTicket(false);
      setShowAttendee(false);
      setShowReady(true);
    }
    console.log(`Step: ${step}, showTicket: ${showTicket}, showAttendee: ${showAttendee}, showReady: ${showReady}`);
  }, [step]);

  function handleStep() {
    setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  }

  function handleBack() {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  }

  return (
    <TicketContext.Provider
      value={{
        ticketTypes,
        selectedTicket,
        setSelectedTicket,
        step,
        setStep,
        handleStep,
        handleBack,
        showTicket,
        setShowTicket,
        showAttendee,
        setShowAttendee,
        showReady,
        setShowReady,
        formData,
        setFormData,
        numTickets,
        setNumTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;