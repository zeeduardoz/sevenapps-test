import axios from "axios";

export const api = axios.create({
  baseURL: "https://random-persons.herokuapp.com",
});
