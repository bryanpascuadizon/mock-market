import axios from "axios";

/* Get all categories */
export const getCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    return data;
  } catch (error) {
    throw new Error("Failed to get categories");
  }
};

/* Get all products*/
export const getProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    return data;
  } catch (error) {
    throw new Error("Failed to get products");
  }
};

export const getProduct = async (productId: number) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );

    return data;
  } catch (error) {
    throw new Error("Failed to get product");
  }
};
