import axios from "axios";

export function userTicketSubmission(userData){
  //Sending Ticket to Zenhub from Redux Store
  const userTicketData = userData.tickets[0].text;
    return axios.post("/home/submit", userTicketData);
}

export function getTickets(){
    return axios.get("/api");
}

