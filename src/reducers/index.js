import { SUBMIT_TICKETS } from "../constants";

const ticket = (action) => {
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
    default:
  return state;
  }
}

export default tickets;
