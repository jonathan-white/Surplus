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
  uploadProductPic: (data) => {
    return axios.post("/api/uploads",data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
};