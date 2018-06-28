import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {

  // Product APIs
  getProducts: () => {
    return axios.get("/api/products");
  },
  getProduct: (id) => {
    return axios.get("/api/products/" + id);
  },
  createProduct: (productData) => {
    return axios.post("/api/products", productData);
  },
  uploadProductPic: (data) => {
    return axios.post("/api/uploads",data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  deleteProduct: (id) => {
    return axios.delete("/api/products/" + id);
  },
  // Account APIs
  createAccount: (userData) => {
    return axios.post("/api/users", userData);
  },
  loginAccount: (userData) => {
    return axios.post("/api/users/login", userData);
  },
  createCompany: (companyData) => {
    return axios.post("/api/users", companyData);
  },
  getUser: (id) => {
    return axios.get("/api/users/" + id);
  },

};
