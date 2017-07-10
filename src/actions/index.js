import { SUBMIT_TICKETS } from "../constants";

export const submitTickets = (text) => {
  const action = {
    type: SUBMIT_TICKETS,
    text
  }
  console.log("action in getTicket", action);
  return action;
}