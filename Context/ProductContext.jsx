import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";


const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
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
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        setSearch,
        search,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


export const useProducts = () => useContext(ProductContext);
