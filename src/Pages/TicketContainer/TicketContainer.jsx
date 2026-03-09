import { use } from "react";
import Ticket from "../../Components/Ticket";
import Status from "../../Components/Status";
export default function TicketContainer({
  ticketPromise,
  handleAddProgress,
  progress,
  handleAddResolved
}) {
  const ticketData = use(ticketPromise);
  const tickets = ticketData.tickets;
  // console.log(tickets);
  return (
    <div className="flex">
      {/* All ticket card */}
      <div className="grid flex-1 md:grid-cols-2">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleAddProgress={handleAddProgress}
          ></Ticket>
        ))}
      </div>

      {/* task status */}
      <div className="">
        {/* add to inprogress */}
        <div className="p-10`">
          <h3>Task Status</h3>
          <hr />
          {progress.length === 0 ? (
            <p>select a ticket to add to Task Status</p>
          ) : (
            <Status handleAddResolved={handleAddResolved} progress={progress}></Status>
          )}
        </div>
        {/* add to resolved */}
        <div className="my-10">
          <h3> Resolved Task </h3>
          <hr />
          <p>No resolved task yet</p>
        </div>
      </div>
    </div>
  );
}
