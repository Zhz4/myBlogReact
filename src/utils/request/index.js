import Axois from "./axios";

const baseUrl = import.meta.env.VITE_BASEURL;
export default new Axois({
  baseURL: baseUrl,
  timeout: 1000 * 60,
});
