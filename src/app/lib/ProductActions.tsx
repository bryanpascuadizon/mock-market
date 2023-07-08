import axios from "axios";

/* Get all products*/
export const getProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    return data;
  } catch (error) {
    throw new Error("Faile to get products");
  }
};

export const getProduct = async (productId: number) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    return data;
  } catch (error) {
    throw new Error("Faile to get product");
  }
};
