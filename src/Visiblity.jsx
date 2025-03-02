import { useContext } from "react";
import TicketContext from "./TicketsContext";
import Tickets from "./Components/Tickets";
import Attendee from "./Components/Attendee";
import ReadyTicket from "./Components/ReadyTicket";

export default function Visibility() {
  const { showTicket, showReady, showAttendee } = useContext(TicketContext);

  return (
    <div>
      {showTicket ? (
        <Tickets />
      ) : showAttendee ? (
        <Attendee />
      ) : showReady ? (
        <ReadyTicket />
      ) : null}
    </div>
  );
}