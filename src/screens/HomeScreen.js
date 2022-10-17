import { imgNotFound } from "../config";
import { whatRequestIs } from "../api";
import {
  parseRequestUrl,
  discountProduct,
  uppInitial,
  showNumMil,
} from "../utils";

const HomeScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const response = await whatRequestIs(request);

    const itemsXPage = 10;
    const allProducts = response[1].data;

    const numPages = Math.ceil(allProducts.length / itemsXPage);
    const arrayPages = [];

    for (let index = 1; index <= numPages; index++) {
      arrayPages.push(index);
    }

    if (response[0].data.msg) {
      return `<div>Error al obtener los productos</div>`;
    }
    let products = response[0].data;

    const uwu = document.getElementsByClassName("page-current");
    const currentPage = (element) => {
      if (request.value == element) {
        return true;
      }
      if (request.name === "" && element === 1) {
        return true;
      }
      return false;
    };

    return `
    <div class="paginated">
    <ul>
        ${
          request.name === "" || request.name === "page"
            ? arrayPages
                .map(
                  (element) => `
                  <a href="/#/?page=${element}">                  
                  <li class=${`page-current`}>          
                  <li>          
                  <span class=${currentPage(element) ? "page-current" : ""} >
                  ${element}
                  </span>
                  </li>
                  </a>
          
          `
                )
                .join("\n")
            : ``
        }
        </ul>
        </div>  
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
