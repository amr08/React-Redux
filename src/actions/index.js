import { SUBMIT_TICKETS, GET_TICKETS } from "../constants";

export const submitTickets = (text) => {
  const action = {
    type: SUBMIT_TICKETS,
    text
  }
  return action;
}

export const getTickets = (text) => {
  const action = {
    type: GET_TICKETS,
    text
  }
  return action;
}