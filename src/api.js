import axios from "axios";
import { apiUrl } from "./config";

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`);
    if (!response) {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.response.data.message || error.message };
  }
};
