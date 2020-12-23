import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from '../../context/AuthContext'
import axios from "axios";

const ShowProduct = () => {
  const API = "http://localhost:4000";

  const { authData } = useContext(AuthContext);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadProduct = async () => {
    const res = await axios.get(API+`/api/product/${id}`,{
      headers:{
        "Content-Type": "application/json",
        "x-access-token": authData.token
      }
    });
    setProduct(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/product">
        back to Product
      </Link>
      <h1 className="display-4">Product Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {product.name}</li>
        <li className="list-group-item">category: {product.category}</li>
        <li className="list-group-item">description: {product.description}</li>
      </ul>
    </div>
  );
};

export default ShowProduct;
