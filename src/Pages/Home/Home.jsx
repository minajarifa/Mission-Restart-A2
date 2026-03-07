import { Suspense } from "react";
import Banner from "../../Layout/Banner/Banner";
import TicketContainer from "../TicketContainer/TicketContainer";

const fetchTicket = async () => {
  const res = await fetch(`/public/ticket.json`)
  return res.json();
};
export default function Home() {
  const TicketPromise= fetchTicket()
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={`Ticket data comming soon`}>
        <TicketContainer TicketPromise={TicketPromise}></TicketContainer>
      </Suspense>
    </div>
  );
}
