import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  //REFERENT API
  const API = "http://localhost:4000"


  useEffect(() => {
    loadProducts();
  }, []); 

  const loadProducts = async () => {
    const result = await axios.get(API+"/api/product");
    console.log(result.data.reverse())
    setProducts(result.data.reverse());
  };

  const deleteProduct = async id => {
    await axios.delete(API+`/api/product/${id}`);
    loadProducts();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th>ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.imgURL}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/product/show/${product._id}`}>
                    View
                  </Link>

                  <Link className="btn btn-outline-primary mr-2" to={`/product/edit/${product._id}`}>
                    Edit
                  </Link>

                  <Link className="btn btn-danger" to="/product" onClick={() => deleteProduct(product._id)}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
