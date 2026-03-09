export default function Ticket({ ticket,handleAddProgress }) {
  return (
    <button onClick={()=>handleAddProgress(ticket)}>
      <div>
        {/* start */}
        <div className="shadow-sm card bg-base-100 w-96">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="font-bold card-title">{ticket?.title}</h2>
              <span className="badge badge-secondary">{ticket?.status}</span>
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
    </button>
  );
}
