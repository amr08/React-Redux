import { SUBMIT_TICKETS, GET_TICKETS } from "../constants";

export const submitTickets = (text) => {
  const action = {
    type: SUBMIT_TICKETS,
    text
  }
  console.log("action in getTicket", action);
  return action;
}

export const getTickets = (text) => {
  const action = {
    type: GET_TICKETS,
    text
  }
  console.log("getting tickets from action", action);
  return action;
}