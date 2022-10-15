import { parseRequestUrl } from "../utils";
const Header = {
  render: () => {
    const request = parseRequestUrl();
    if (request.name === "name") {
      var value = request.value;
    }
    return `
  <div class="brand">
    <button id="aside-open-button">
      &#9776;
    </button>
    <a href="/">BSale Test</a>
  </div>
  <div class="search">
  <form class="search-form"  id="search-form">
    <input type="text" name="q" id="q" value="${value || ""}" />
    <button class="primary"type="submit">   
    <i class="fa fa-search"></i
    </button>
  </form>
  </div>
  <div>
    <span><i class="fa fa-shopping-cart fa-2x"></i></span>
    <a href="/#/cart">Shopping Cart</a>
  </div>`;
  },
  after_render: () => {
    document
      .getElementById("search-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchKeyword = document.getElementById("q").value;
        document.location.hash = `/?name=${searchKeyword}`;
      });

    document
      .getElementById("aside-open-button")
      .addEventListener("click", async () => {
        document.getElementById("aside-container").classList.add("open");
      });
  },
};
export default Header;
