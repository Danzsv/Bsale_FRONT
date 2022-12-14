import HomeScreen from "./screens/HomeScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";
import CartScreen from "./screens/CartScreen.js";
import Header from "./components/Header.js";
import Aside from "./components/Aside.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById("header-container");
  header.innerHTML = Header.render();
  Header.after_render();

  const aside = document.getElementById("aside-container");
  aside.innerHTML = await Aside.render();
  await Aside.after_render();

  const main = document.getElementById("main-container");
  main.innerHTML = await screen.render();
  (await screen.after_render) && screen.after_render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
