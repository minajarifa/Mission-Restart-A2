import { use } from "react";

export default function TicketContainer({ TicketPromise }) {
  const ticketData = use(TicketPromise);
  const tickets = ticketData.tickets;
  console.log(tickets);
  return (
    <div className="">
      {/* All ticket card */}
      <div>
        <h1>Customer Ticket</h1>
        <div>
          {/* start */}
          <div className="shadow-sm card bg-base-100 w-96">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="font-bold card-title">
                Card Title
              </h2>
                <span className="badge badge-secondary">NEW</span>
              </div>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="justify-between card-actions">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      {/* task status */}
      <div></div>
    </div>
  );
}
