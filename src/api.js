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
export const whatRequestIs = async (request) => {
  if (request.name === "name") {
    return await axios.get(`${apiUrl}/products?name=${request.value}`);
  }
  if (request.name === "category") {
    return await axios.get(`${apiUrl}/products?category=${request.value}`);
  }
  return await axios.get(`${apiUrl}/products`);
};

export const getCategories = async () => {
  const response = await axios.get(`${apiUrl}/categories`);
  return response;
};
