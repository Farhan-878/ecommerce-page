import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../assets/style.css";
import { Button } from "react-bootstrap";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("Product ID:", id);

  const productItem = useSelector((state) => {
    console.log("State Products:", state.products.items);
    return state.products.items.find((item) => item.id === id);
  });

  console.log("Product Item:>>>>>", productItem);

  if (!productItem) return <p>Product not found.</p>;

  return (
    <div className="container">
      <div className="product-details">
        <Button
          variant="secondary"
          onClick={() => navigate(-1)}
          data-aos="fade-right"
        >
          Back to List
        </Button>
        <img
          src={productItem.urls.regular}
          alt={productItem.alt_description}
          data-aos="fade-up"
        />
        <h1 data-aos="fade-up">{productItem.alt_description}</h1>
        <p data-aos="fade-up">{productItem.user.name}</p>
        <p data-aos="fade-up">User Reviews: {productItem.likes}</p>
      </div>
    </div>
  );
};

export default ProductPage;
