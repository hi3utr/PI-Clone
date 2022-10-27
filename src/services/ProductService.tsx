import Instance from "../dependencies/AxiosInstance";

export const getProductList = async () => {
  const res = await Instance.get("/products");
  return res;
};
