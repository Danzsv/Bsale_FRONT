const HomeScreen = {
  render: async () => {
    const imageNotFound =
      "https://res.cloudinary.com/programandoandopf/image/upload/v1665728125/PF/imageNotFound_dfv8oy.png";
    const response = await fetch(
      "https://bsaleback-liodandev.up.railway.app/api/products",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response || !response.ok) {
      return `<div>Error in getting data </div>`;
    }

    const products = await response.json();

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
                        ? imageNotFound
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
