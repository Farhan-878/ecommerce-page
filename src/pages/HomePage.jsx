import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import "../assets/style.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) =>
    product.alt_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-container">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching products.</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
