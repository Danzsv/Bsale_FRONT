import { getCategories } from "../api";

const Aside = {
  render: async () => {
    const response = await getCategories();
    const categories = response.data;

    return `
     <div class="aside-header">
      <div>SHOP BY CATEGORY</div>
      <button class="aside-close-button" id="aside-close-button">x</button>
    </div>
    <div class="aside-body">
      <ul class="categories">
      <li>
          <a href="/#/""
            >TODAS LAS CATEGORÍAS
            <span><i class="fa fa-chevron-right"></i></span>
          </a>
        </li>
        <li> 
      ${categories
        .map(
          (category) => `
          <li>
          <a href="/#/?category=${category.name}""
            >${category.name.toUpperCase()}
            <span><i class="fa fa-chevron-right"></i></span>
          </a>
        </li>
        <li>
      `
        )
        .join("\n")}         
      </ul>
    </div>`;
  },
  after_render: async () => {
    document.getElementById("aside-container").classList.remove("open");
    document
      .getElementById("aside-close-button")
      .addEventListener("click", async () => {
        document.getElementById("aside-container").classList.remove("open");
      });
  },
};

export default Aside;
