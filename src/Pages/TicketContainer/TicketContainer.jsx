
import { use } from "react"

export default function TicketContainer({TicketPromise}) {
    const ticketData = use(TicketPromise)
    console.log(ticketData)
  return (
    <div>{ticketData?.length}</div>
  )
}
