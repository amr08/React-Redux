import { SUBMIT_TICKETS, GET_TICKETS } from "../constants";

const ticket = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const currentTickets = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const tickets = (state = [], action) => {
  let tickets = null;
  switch(action.type){
    case SUBMIT_TICKETS:
      tickets = [...state, ticket(action)];
      console.log("tickets as state", tickets)
      return tickets;
    case GET_TICKETS:
      tickets = [...state, currentTickets(action)];
      console.log("currentTickets in reducer", tickets)
      return tickets
    default:
  return state;
  }
}

export default tickets;
