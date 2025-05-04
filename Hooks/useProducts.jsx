
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const useProducts = (search = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return data.filter((item) =>
      item.title.includes(search)
    );
  }, [data, search]);

  return { products: filteredProducts, loading, error };
};

export default useProducts;
