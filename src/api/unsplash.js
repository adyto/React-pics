import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jzBHqpuTdtpbOGeUqbLrUAlEdB5rThK9hYmaEA3viH4",
  },
});
