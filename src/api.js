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
  const allProducts = await axios.get(`${apiUrl}/products`);

  if (request.name === "name") {
    let data = await axios.get(`${apiUrl}/products?name=${request.value}`);
    return [data, allProducts];
  }
  if (request.name === "category") {
    let data = await axios.get(`${apiUrl}/products?category=${request.value}`);
    return [data, allProducts];
  }
  if (request.name === "page") {
    let data = await axios.get(
      `http://localhost:3001/api/products?page=${request.value}`
    );
    return [data, allProducts];
  }
  const firstPage = await axios.get(
    `http://localhost:3001/api/products?page=1`
  );
  return [firstPage, allProducts];
};

export const getCategories = async () => {
  const response = await axios.get(`${apiUrl}/categories`);
  return response;
};
