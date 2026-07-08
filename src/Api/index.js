import axios from "axios";
import { BASE_URL } from "./UrlProvider";

export const getAuthAPI = async (endPoint, navigate = null) => {
  const config = {
    method: "get",
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-Type": "application/json",
      timeout: 10000,
    },
  };
  try {
    const response = await axios.request(config);
    return { data: response?.data };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error("Error 401: Unauthorized");
    //   LocalStorage.ClearStorage();
      if (navigate) {
        navigate("/");
      }
    }
    return { error: error.message };
  }
};
export const postAuthAPI = async (
  body,
  endPoint,navigate = null) => {
  try {
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${endPoint}`,
    headers: { 'Content-Type': 'application/json',
      Accept: 'application/json',
      timeout: 10000,
       },
    ...(body && {data: JSON.stringify(body)}),
  };
    const response = await axios.request(config);
    return { data: response?.data };
  } catch (error) {
    if (error?.response && error?.response?.status === 401) {
    
      if(navigate){
        console.error("Error 401: Unauthorized");
        navigate("/");
      }
    
    }

    return { error: error };
  }
};
export const API = {
  getAuthAPI,
  postAuthAPI,
};
