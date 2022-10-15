import axios from "axios";
import { apiUrl, imgNotFound } from "../config";
import { parseRequestUrl, discountProduct, uppInitial } from "../utils";

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
                        $${discountProduct(product.price, product.discount)}
                        </div>`
                        : `
                        <div class="product-price-discount">
                            <strike>
                            $${product.price}
                            </strike>
                        </div>
                        <div class="product-price-discount">
                            $${discountProduct(product.price, product.discount)}
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
