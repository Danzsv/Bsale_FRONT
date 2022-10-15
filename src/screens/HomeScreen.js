import axios from "axios";
import { apiUrl, imgNotFound } from "../config";
import {
  parseRequestUrl,
  discountProduct,
  uppInitial,
  showNumMil,
} from "../utils";

const HomeScreen = {
  render: async () => {
    const request = parseRequestUrl();
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
                    <a href="/#/product/${
                      product.product_id
                    }"> ${product.product_name.toUpperCase()} </a>
                    </div>
                    ${
                      product.discount !== 0
                        ? `<div class="product-discount">
                    Discount: ${product.discount}% </a>
                    </div>`
                        : `<div class="product-discount">
                        Discount: Not discount</a>
                        </div>`
                    }
                    
                    <div class="product-brand">${uppInitial(product.name)}</div>
                    
                    ${
                      product.discount === 0
                        ? `
                        <div class="product-price">
                        $${showNumMil(product.price)}
                        </div>`
                        : `
                        <div class="product-price-discount">
                            <strike>
                            $${showNumMil(product.price)}
                            </strike>
                        </div>
                        <div class="product-price-discount">
                            $${showNumMil(
                              discountProduct(product.price, product.discount)
                            )}
                        </div>
                        `
                    } 
                </div>
            </li>
            `
              )
              .join("\n")}        
        `;
  },
};
export default HomeScreen;
