import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const ProductCard = ({ product }) => (
  console.log("product>>>>", product),
  (
    <div className="card" data-aos="zoom-in">
      <Link to={`/product/${product.id}`}>
        <img src={product.urls.small} alt={product.alt_description} />
        <h3>{product.alt_description}</h3>
        <p>{product.user.name}</p>
      </Link>
    </div>
  )
);

export default ProductCard;
