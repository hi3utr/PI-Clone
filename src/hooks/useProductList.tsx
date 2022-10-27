import { useEffect } from "react";
import { useState } from "react";
import { ProductInterface } from "../interface/ProductInterface";
import { getProductList } from "../services/ProductService";

export const useProductList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const fetchApi = async () => {
    setLoading(true);
    const res = await getProductList();
    setProducts(res.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    fetchApi,
    loading,
    setLoading,
    products,
  };
};
