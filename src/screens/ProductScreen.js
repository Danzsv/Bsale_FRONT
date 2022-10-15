import {
  parseRequestUrl,
  discountProduct,
  uppInitial,
  showNumMil,
} from "../utils";
import { getProduct } from "../api";
import { imgNotFound } from "../config";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("add-button").addEventListener("click", () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },

  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    if (product.msg) {
      return `<h1>${product.msg}</h1>`;
    }
    console.log(product);
    return `
    <div class="content">
        <div class="back-to-result">
            <a href="/#/">Back to result</a>
        </div>
        <div class="details">
            <div class="details-image">
                <img src="${
                  product.url_image === "" || product.url_image === null
                    ? imgNotFound
                    : product.url_image
                }" />
            </div>
            <div class="details-info">
                <ul>
                    <li>
                        <h1>${product.product_name.toUpperCase()}</h1>
                    </li>
                    <li class="detail-discount">
                        Discount: ${
                          product.discount === 0
                            ? "Not Discount"
                            : `${product.discount} %`
                        }
                    </li>
                    
                    Price:                                      
                    ${
                      product.discount === 0
                        ? `
                        <li class="detail-list">
                        <strong>$${showNumMil(
                          discountProduct(product.price, product.discount)
                        )}</strong>
                        </li>`
                        : `
                        <li class="detail-list-discount">
                            <strike>
                            $${showNumMil(
                              product.price
                            )}                        
                            </strike>
                        </li>    
                        <li class="detail-list-discount">
                            <strong>$${showNumMil(
                              discountProduct(product.price, product.discount)
                            )}</strong>
                        </li>
                        
                        
                        `
                    }
                    
                    <li>
                        Category: 
                        <div>
                            ${uppInitial(product.name)}
                        </div>
                    </li>
                </ul>                
            </div>
            <div class="details-action">
                <ul>
                    <li>
                        Price: $${showNumMil(
                          discountProduct(product.price, product.discount)
                        )}
                    </li>
                    <li>                    
                        <button id="add-button"class="fw primary">Add to Cart</button>                                        
                </ul>
            </div>                
        </div>
    
    </div>
    
    `;
  },
};

export default ProductScreen;
