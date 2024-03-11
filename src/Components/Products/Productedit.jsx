import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductsContext from "../../ContextApis/ProductsContext";

const EditProduct = () => {
  const { id } = useParams();
  const { getProductById, selectedProduct, editProduct } =
    useContext(ProductsContext);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getProductById(id);
  }, [id, getProductById]);

  useEffect(() => {
    if (selectedProduct) {
      setUpdatedProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    try {
      editProduct(id, updatedProduct);
      setSuccessMessage("Product updated successfully!");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Error updating product. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <div className="border p-2">
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={updatedProduct.title || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={updatedProduct.description || ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="stock"
            name="stock"
            value={updatedProduct.stock || ""}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-success" onClick={handleEdit}>
          Save Changes
        </button>
        <Link to={"/products"} className="btn btn-secondary ms-2">
          Back
        </Link>
      </div>
    </div>
  );
};

export default EditProduct;
