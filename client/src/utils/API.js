import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {
  getProducts: () => {
    return axios.get("/api/products");
  },
  getProduct: (id) => {
    return axios.get("/api/products/" + id);
  },
  createAccount: (companyData) => {
    return axios.post("/api/users", companyData);
  },
  createProduct: (productData) => {
    return axios.post("/api/products", productData);
  },
  getUser: (id) => {
    return axios.get("/api/users/" + id);
  },
  uploadProductPic: () => {
    return axios.post("/api/uploads");
  },
};


// function postData(url, data) {
//  // Default options are marked with *
//  return fetch(url, {
//    body: JSON.stringify(data), // must match 'Content-Type' header
//    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    headers: {
//      'user-agent': 'Mozilla/4.0 MDN Example',
//      'content-type': 'application/json'
//    },
//    method: 'POST', // *GET, POST, PUT, DELETE, etc.
//    mode: 'cors', // no-cors, cors, *same-origin
//    redirect: 'follow', // manual, *follow, error
//    referrer: 'no-referrer', // *client, no-referrer
//  })
//  .then(response => response.json()) // parses response to JSON
// }