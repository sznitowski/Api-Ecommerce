import axios from "axios";

//NODE_ENV = 'develpoment'
//NODE_ENV = 'production'


//const baseURL = "http://localhost:5000/api/user"
const baseURL = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api"

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    'Accept': 'application/json',
    'Authorization': 'JWT_KEY'
  }
});