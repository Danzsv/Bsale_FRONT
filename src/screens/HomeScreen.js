import axios from "axios";
import { apiUrl, imgNotFound } from "../config";
import { parseRequestUrl } from "../utils";

const HomeScreen = {
  render: async () => {
    const request = parseRequestUrl();
    console.log(request);
    var response;
    if (request.name === "name") {
      response = await axios.get(`${apiUrl}/products?name=${request.value}`);
    } else if (request.name === "category") {
      response = await axios.get(
        `${apiUrl}/products?category=${request.value}`
      );
    } else {
      response = await axios.get(`${apiUrl}/products`);
    }

    console.log(response.data);
    if (response.data.msg) {
      return `<div>El producto no existe actualmente </div>`;
    }
    const products = await response.data;

    return `
        <ul class="products">
            ${products
              .map(
                (product) => `
            <li>
                <div class="product">
                    <a href="/#/product/${product.product_id}">
                    <img src="${
                      product.url_image === "" || product.url_image === null
                        ? imgNotFound
                        : product.url_image
                    }"/>
                    </a>

                    <div class="product-name">
                    <a href="/#/product/${product.product_id}"> ${
                  product.product_name
                } </a>
                    </div>
                    <div class="product-brand">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                </div>
            </li>
            `
              )
              .join("\n")}        
        `;
  },
};
export default HomeScreen;
