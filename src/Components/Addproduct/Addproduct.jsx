import React, { useCallback, useState, useContext } from "react";
import ProductsContext from "../../ContextApis/ProductsContext";

const AddPrd = () => {
  const { addProduct } = useContext(ProductsContext);

  const [Prd, setPrd] = useState({
    title: "",
    description: "",
    stock: "",
    thumbnail: "https://source.unsplash.com/random",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setPrd((old) => ({
      ...old,
      [name]: value,
    }));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addProduct(Prd);
      setSuccessMessage("Product successfully added!");
      setPrd({
        title: "",
        description: "",
        stock: 0,
        thumbnail: "https://source.unsplash.com/random",
      });
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("Error adding product. Please try again.");
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={Prd.title}
            onChange={handleChange}
            placeholder="Enter product title"
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
            value={Prd.description}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={Prd.stock}
            onChange={handleChange}
            placeholder="Enter product stock"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail URL
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            value={Prd.thumbnail}
            onChange={handleChange}
            placeholder="Enter product thumbnail URL"
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default AddPrd;
