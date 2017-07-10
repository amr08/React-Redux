import axios from "axios";

export function userTicketSubmission(userData){
  //Sending Ticket to Zenhub from Redux Store
  const length = userData.tickets.length;
  const userTicketData = userData.tickets[length-1].text;
  return axios.post("/home/submit", userTicketData);
}

export function getTicketsFromApi(){
    return axios.get("/api");
}

