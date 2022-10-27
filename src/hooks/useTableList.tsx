import { useEffect, useState } from "react";
import { ProductInterface } from "../interface/ProductInterface";
import { getTableList } from "../services/TableService";

export const useTableList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const fetchApi = async () => {
    setLoading(true);
    const res = await getTableList();
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
