import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

class PVRegisterService {
  viewPv() {
    return axios.get(API_BASE_URL + "/pv");
  }

  getPvId(pvId) {
    return axios.get(API_BASE_URL + "/pv/" + pvId);
  }

  deletePv(pvId) {
    return axios.delete(API_BASE_URL + "/pv/" + pvId);
  }

  savePv(pv) {
    return axios.post(API_BASE_URL + "/pv", pv);
  }

  updatePv(pv) {
    return axios.put(API_BASE_URL + "/pv/" + pv.pvId, pv);
  }

  searchPv(keyword) {
    return axios.get(API_BASE_URL + "/pvs/" + keyword);
  }
}

const pvRegisterService = new PVRegisterService();
export default pvRegisterService;