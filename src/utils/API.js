import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {
  getCards: function() {
    return axios.get("/api/cards");
  },
  getCompanies: function(breed) {
    return axios.get("/api/companies");
  },
  getUser: function() {
    return axios.get("/api/user");
  }
};


