import React from "react";
import ProductCard from "./ProductCard";
import "../assets/style.css";

const ProductList = ({ products }) => (
  <div className="grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
