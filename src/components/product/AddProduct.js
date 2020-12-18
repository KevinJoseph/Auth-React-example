import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

//REFERENT API
const API = "http://localhost:4000"

const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    imgURL: ""
  });

  const { name, category, description, imgURL } = product;
  /*
  const email = user.email
  const password = user.password
  const id_role = user.id_role
  */

  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    //console.log(user)
  };

  const onSubmit = async e => {
    e.preventDefault();

    await axios.post(API+"/api/product", product);
    history.push("/product");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name Product "
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Category Product"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Description Product"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Image Product"
              name="imgURL"
              value={imgURL}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
