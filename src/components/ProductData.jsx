import React, { useState, useEffect } from "react";

const ProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const sprice = event.target.sprice.value;
    const pname = event.target.pname.value;
    const category = document.getElementById("select").value;

    const newProduct = {
      sprice,
      pname,
      category,
    };

    const updatedProducts = [...products, newProduct];

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    event.target.reset();
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sprice">Price:</label>
        <input type="text" name="sprice" id="sprice" required />

        <label htmlFor="pname">Product name:</label>
        <input type="text" name="pname" id="pname" required />

        <label htmlFor="select">Category:</label>
        <select name="category" id="select">
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.sprice} - {product.pname} - {product.category}
            <button onClick={() => handleDelete(index)}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductData;
