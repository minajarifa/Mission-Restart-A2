import { use } from "react";
import Ticket from "../../Components/Ticket";
export default function TicketContainer({ TicketPromise }) {
  const ticketData = use(TicketPromise);
  const tickets = ticketData.tickets;
  console.log(tickets);
  return (
    <div className="flex">
      {/* All ticket card */}
      <div className="grid flex-1 border md:grid-cols-2">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket}></Ticket>
        ))}
      </div>

      {/* task status */}
      <div className="px-20 ">
        {/* add to inprogress */}
        <div className="p-10`">
          <h3>Task Status</h3>
          <p>select a ticket to add to Task Status</p>
        </div>
        {/* add to resolved */}
        <div>
          <h3> Resolved Task </h3>
          <p>No resolved task yet</p>
        </div>
      </div>
    </div>
  );
}
