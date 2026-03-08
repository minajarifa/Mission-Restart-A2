import { Suspense } from "react";
import Banner from "../../Layout/Banner/Banner";
import TicketContainer from "../TicketContainer/TicketContainer";

const fetchTicket = async () => {
  const res = await fetch(`/ticket.json`)
  return res.json();
};
export default function Home() {
  const TicketPromise= fetchTicket()
  return (
    <div className="text-center">
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-bars loading-xs text-9xl"></span>}>
        <TicketContainer TicketPromise={TicketPromise}></TicketContainer>
      </Suspense>
    </div>
  );
}
