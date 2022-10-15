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

export const getProducts = async ({ searchKeyword = "" }) => {
  try {
    let queryString = "?";
    if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`;

    const response = await axios({
      url: `${apiUrl}/api/products${queryString}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};
