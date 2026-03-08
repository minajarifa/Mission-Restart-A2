import { use } from "react";
export default function TicketContainer({ TicketPromise }) {
  const ticketData = use(TicketPromise);
  const tickets = ticketData.tickets;
  console.log(tickets);
  return (
    <div className="flex">
      {/* All ticket card */}
      <div className="grid flex-1 md:grid-cols-2 ">
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <div>
              {/* start */}
              <div className="shadow-sm card bg-base-100 w-96">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="font-bold card-title">{ticket?.title}</h2>
                    <span className="badge badge-secondary">
                      {ticket?.status}
                    </span>
                  </div>
                  <p>{ticket?.description}</p>
                  <div className="justify-between card-actions">
                    <div className=" badge badge-outline">
                      <span>#{ticket?.id}</span> {ticket?.priority} priority
                    </div>
                    <div className=" badge badge-outline">
                      {ticket?.customer} <span>{ticket?.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        ))}
      </div>

      {/* task status */}
      <div className="px-20 ">
        {/* add to inprogress */}
        <div>
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
