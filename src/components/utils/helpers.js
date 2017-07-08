import axios from "axios";

const helper = { 

  userTicketSubmission: function (userData){
    console.log(userData);
  return axios.post("/home/submit", userData);
  // return dispatch => {
  //  return axios.post("/submit", userData);
  //  }
  }
};

export default helper;