import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../../ContextApis/ProductsContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductById, selectedProduct } = useContext(ProductsContext);

  useEffect(() => {
    getProductById(id);
  }, [id, getProductById]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div className="border p-2">
        <div className="row">
          <div className="col-md-6 my-auto">
            <div>
              {selectedProduct.thumbnail && (
                <img
                  src={selectedProduct.thumbnail}
                  className="w-100"
                  width={400}
                  height={400}
                  alt="Product Card"
                />
              )}
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column">
            <div>
              <h2>{selectedProduct.title || "N/A"}</h2>
              <p>{selectedProduct.description || "N/A"}</p>
              <div className="mt-3">
                <span>
                  <span className="fw-bold">Category:</span>{" "}
                  {selectedProduct.category || "N/A"}
                </span>
              </div>
              <div className="mt-3">
                <span>
                  <span className="fw-bold">Brand:</span>{" "}
                  {selectedProduct.brand || "N/A"}
                </span>
              </div>
              <div className="mt-3">
                <span>
                  <span className="fw-bold">Rating: </span>
                  <span className="text-warning">
                    {" "}
                    {selectedProduct.rating ? selectedProduct.rating : "N/A"}
                  </span>
                </span>
              </div>
              <div className="mt-3">
                <span>
                  <span className="fw-bold">Price:</span>
                  <span className="text-success"> {selectedProduct.price}</span>
                  <span>$</span>
                </span>
              </div>
            </div>
            <div className="mt-auto mt-3">
              <span className="fw-bold">
                Stock:
                <span className="text-success">
                  {" "}
                  {selectedProduct.stock || "N/A"}
                </span>
              </span>
              <input
                type="number"
                className="form-control w-25 mt-3 text-center"
                value="1"
              />
              <button className="btn btn-success w-100 mt-3">
                Add to cart
              </button>
              <Link to={"/products"} className="btn btn-secondary w-100 mt-2">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
