import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProductData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const saveCart = getStoredCart();
  const initialCart = [];
  for (const id in saveCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = saveCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};
