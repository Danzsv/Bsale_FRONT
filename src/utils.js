export const discountProduct = (price, discount) => {
  const newPrice = price - price * (discount / 100);
  // console.log(newPrice);
  return newPrice;
};
export const uppInitial = (str) => str[0].toUpperCase() + str.slice(1);

export const parseRequestUrl = () => {
  const address = document.location.hash.slice(1).split("?")[0];
  const queryString =
    document.location.hash.slice(1).split("?").length === 2
      ? document.location.hash.slice(1).split("?")[1]
      : "";

  const url = address.toLowerCase() || "/";
  const r = url.split("/");
  const q = queryString.split("=");
  return {
    resource: r[1],
    id: r[2],
    verb: r[3],
    name: q[0],
    value: q[1],
  };
};

export const rerender = async (component) => {
  document.getElementById("main-container").innerHTML =
    await component.render();
  await component.after_render();
};
