import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const API = "http://localhost:4000";
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    imgURL: ""
  });

  const { name, category, description, imgURL } = product;

  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(API+`/api/product/${id}`, product);
    history.push("/product");
  };

  const loadProduct = async () => {
    const result = await axios.get(API+`/api/product/${id}`);
    setProduct(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name Product"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Description Product"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Image Product"
              name="imgURL"
              value={imgURL}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
