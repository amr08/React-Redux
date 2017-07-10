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
      return tickets;
    case GET_TICKETS:
      tickets = [...state, currentTickets(action)];
      return tickets
    default:
  return state;
  }
}

export default tickets;
