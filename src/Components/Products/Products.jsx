import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../ContextApis/ProductsContext";
import styles from "./Products.module.css";

const Products = () => {
  const { products, getProducts, deleteProduct } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <>
      <h2>Products</h2>

      <div className="row g-2 border mt-1">
        {products.map((product, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="border">
              <img
                height="300px"
                className="w-100 "
                src={product.thumbnail}
                alt="Product Thumbnail"
              />
              <div className="p-3">
                <h4>{product.title}</h4>
                <p className={styles.productDesc}>{product.description}</p>
                <span className="fw-bold">
                  Stock: <span className="text-success">{product.stock}</span>
                </span>
                <div className="mt-2">
                  <Link
                    className="btn btn-dark me-2"
                    to={`${product.id}/edit`}
                  >
                    Edit
                  </Link>

                  <Link className="btn btn-dark" to={`/products/${product.id}`}>
                    Details
                  </Link>

                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
