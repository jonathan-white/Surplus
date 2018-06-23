import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {
  getProducts: function() {
    return axios.get("/api/products");
  },
  getUser: function() {
    return axios.get("/api/user");
  }
};


