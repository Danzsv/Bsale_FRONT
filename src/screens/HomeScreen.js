import axios from "axios";
import { apiUrl, imgNotFound } from "../config";
const HomeScreen = {
  render: async () => {
    const response = await axios.get(`${apiUrl}/products`);
    if (!response) {
      return `<div>Error in getting data </div>`;
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
                    <div class="product-price">${product.price}</div>
                </div>
            </li>
            `
              )
              .join("\n")}        
        `;
  },
};
export default HomeScreen;
