import axios from "axios";

class AxiosService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });
  }

  get(endpoint) {
    return this.api.get(endpoint);
  }

  post(endpoint, data) {
    return this.api.post(endpoint, data);
  }

  put(endpoint, data) {
    return this.api.put(endpoint, data);
  }

  delete(endpoint) {
    return this.api.delete(endpoint);
  }
}

export default AxiosService;
