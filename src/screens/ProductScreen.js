import { parseRequestUrl } from "../utils";
import { getProduct } from "../api";
import { imgNotFound } from "../config";

const ProductScreen = {
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
                        <h1>${product.product_name}</h1>
                    </li>
                    <li>
                        Price: <strong>$${product.price}</strong>
                    </li>
                    <li>
                        Category: 
                        <div>
                            ${product.name}
                        </div>
                    </li>
                </ul>                
            </div>
            <div class="details-action">
                <ul>
                    <li>
                        Price: $${product.price}
                    </li>
                    <li>                    
                        <button class="fw primary">Add to Cart</button>                                        
                </ul>
            </div>                
        </div>
    
    </div>
    
    `;
  },
};

export default ProductScreen;
