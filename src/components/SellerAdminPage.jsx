import React from "react";
import ProductData from './ProductData';

const SellerAdminPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Enter Product Details</h1>

      <ProductData />

      <ul id="mobilelist"></ul>

      <ul id="foodlist"></ul>

      <ul id="fashionlist"></ul>
    </div>
  );
};

export default SellerAdminPage;
