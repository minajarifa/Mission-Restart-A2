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
  const [resolved, setresolved] = useState(0);
  const handleAddProgress = (ticket) => {
    setProgress([...progress, ticket]);
    Swal.fire(`${ticket.title} are added`);
  };
  const handleAddResolved=(progres)=>{
  const  resolved= progress.filter(pro=>pro.id !==progres.id)
    // console.log(progres);
    setProgress(resolved);
  }
  console.log(progress);
  return (
    <div className="text-center">
      <Banner progress={progress}></Banner>
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
        ></TicketContainer>
      </Suspense>
    </div>
  );
}
