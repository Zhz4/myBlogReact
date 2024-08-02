import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeToken } from "@/util/auth";

const navigate = useNavigate();

export default class DhRequest {
  instance;
  constructor(axiosConfig) {
    this.instance = axios.create(axiosConfig);
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  // 请求拦截
  setRequestInterceptor() {
    this.instance.interceptors.request.use(async (config) => {
      const handleConfig = { ...config };
      if (!handleConfig.headers) {
        handleConfig.headers = {};
      }
      handleConfig.headers.Authorization =
        "Bearer " + localStorage.getItem("token");
      return handleConfig;
    });
  }

  // 设置响应拦截
  setResponseInterceptor() {
    this.instance.interceptors.response.use(
      (res) => {
        if (res.data.code >= 200 && res.data.code < 300) {
          const backendResult = res.data;
          return backendResult;
        } else {
          //   message.error(res);
          return Promise.reject(res);
        }
      },
      (err) => {
        if (err.response.data.code === 401) {
          //   message.error(err.response.data.data.message);
            removeToken();
          //   userStore.removeUserInfo();
          //   UseTagStore.clearTag();
          navigate("/login");
          return;
        }
        const errmessage = err.response.data.data.message;
        // message.error(errmessage);
        return Promise.reject(errmessage);
      }
    );
  }

  // 请求
  async request(config) {
    try {
      const res = await this.instance.request(config);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
