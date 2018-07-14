import axios from "axios";

export default {

  // Product APIs
  // ======================================

  // Returns all products
  getProducts: () => {
    return axios.get("/api/products");
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

  // Cart APIs
  createCart: (cartData) => {
    return axios.post("/api/cart", cartData);
  },
  getCart: (sessionId) => {
    return axios.get("/api/cart/" + sessionId);
  },
  updateCart: (cartId, cartData) => {
    return axios.put("/api/cart/" + cartId, cartData);
  },
  deleteCart: (id) => {
    return axios.delete("/api/cart/" + id);
  },
  verifyReCaptcha: (data) => {
    return axios.post('https://www.google.com/recaptcha/api/siteverify',data);
  },

  getSessionID: () => {
    return axios.get("/api/session");
  },
  searchFor: (query) => {
    return axios.get(`/api/products/search?q=${query}`);
  }
};
