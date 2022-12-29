import axios from "axios";

export default axios.create({
  baseURL: "https://chatbot-fast-server.deta.dev/",
});