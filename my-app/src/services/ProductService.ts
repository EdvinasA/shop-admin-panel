import axios from "axios";
import {Page} from "../models/product";

export const fetchUserData = () => {
  return axios({
    method: 'GET',
    url: `http://localhost:8081/api/user/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2RhQGdtYWlsLmNvbSIsImV4cCI6MTY2OTE5Mjc5MX0.LF56_a24C0lweI8O--CdN1r3fZcuvklqVTBM6NLAMDs`,
  });
};

export const fetchProductsList = async () => {
  try {
    const url: string = 'http://localhost:8081/api/shop/product';

    return await axios.get<Page>(url)
  } catch (error) {

  }
}
