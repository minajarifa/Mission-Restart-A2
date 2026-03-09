import { Suspense, useState } from "react";
import Banner from "../../Layout/Banner/Banner";
import TicketContainer from "../TicketContainer/TicketContainer";
import Swal from "sweetalert2";

const fetchTicket = async () => {
  const res = await fetch(`/ticket.json`);
  return res.json();
};
const ticketPromise = fetchTicket();

export default function Home() {
  const [progress, setProgress] = useState([]);
  const [resolved, setresolved] = useState([]);
  const handleAddProgress = (ticket) => {
    if (progress.id === ticket.id) {
      Swal.fire(`The same id cannot be added twice.`);
      return;
    }
    setProgress([...progress, ticket]);
    Swal.fire(`${ticket.title} are added to progress status`);
  };
  // ToDo
  const sumResolvedData = (progres) => {
    console.log("resolved", resolved);
    setresolved([...resolved, progres]);
    Swal.fire(`${progres.title} are added to resolved status`);
  };
  const handleAddResolved = (progres) => {
    const resolved = progress.filter((pro) => pro.id !== progres.id);
    // console.log(progres);
    sumResolvedData(progres);
    setProgress(resolved);
  };
  return (
    <div className="text-center">
      <Banner resolved={resolved} progress={progress}></Banner>
      <Suspense
        fallback={
          <span className="loading loading-bars loading-xs text-9xl"></span>
        }
      >
        <TicketContainer
          progress={progress}
          handleAddProgress={handleAddProgress}
          ticketPromise={ticketPromise}
          handleAddResolved={handleAddResolved}
          resolved={resolved}
        ></TicketContainer>
      </Suspense>
    </div>
  );
}
