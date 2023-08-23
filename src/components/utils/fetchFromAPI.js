import requests from "../../requests";
import axios from "axios";

export const fetchFromAPI = async () => {
  try {
    const response = await axios.get(requests.requestPopular);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
