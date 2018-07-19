import axios from "axios";

export default {

  // Product APIs
  // ======================================

  // Returns all products (split into categories)
  getProducts: () => {
    return axios.get("/api/products");
  },

  // Returns all products (no category split)
  getAllProducts: () => {
    return axios.get("/api/products/list");
  },

  // Returns all products of a specified category
  getProductsForCategory: (category) => {
    return axios.get(`/api/products/category/${category}`);
  },

  // Returns only products added by the specified user
  getProductsForUser: (userId) => {
    return axios.get("/api/products/user/"+ userId);
  },

  // Returns a specific product
  getProduct: (id) => {
    return axios.get("/api/products/" + id);
  },

  // Creates a new product
  createProduct: (productData) => {
    return axios.post("/api/products", productData);
  },

  // Creates a new product for a specific user
  addProductToSell: (userId,productData) => {
    return axios.post(`/api/products/${userId}`, productData);
  },

  // Uploads a Picture locally and to Google Cloud Storage
  uploadPic: (data) => {
    return axios.post("/api/uploads/",data,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  deletePic: (filepath) => {
    return axios.delete("/api/uploads/",{ filepath });
  },

  // Removes a product from the database (pic remains)
  deleteProduct: (id) => {
    return axios.delete("/api/products/" + id);
  },
  deleteProductPic: (id) => {
    return axios.delete("/api/uploads/",id);
  },

  // Account APIs
  // ======================================
  createAccount: (userData) => {
    return axios.post("/api/users", userData);
  },
  createCompany: (companyData) => {
    return axios.post("/api/users", companyData);
  },
  loginAccount: (userData) => {
    return axios.post("/api/users/login", userData);
  },

  // Returns a single user account with product details
  getAccount: (id) => {
    return axios.get("/api/users/" + id);
  },

  verifyReCaptcha: (data) => {
    return axios.get(
      'https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify',{
      params: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    });
  },

  getSessionID: () => {
    return axios.get("/api/session");
  },
  getIP: () => {
    return axios.get("/api/ip-address");
  },

  searchFor: (query) => {
    return axios.get(`/api/search?q=${query}`);
  }
};
