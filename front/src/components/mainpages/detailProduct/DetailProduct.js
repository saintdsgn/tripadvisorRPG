import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="product_card">
        {/* {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            } */}
        <img src={detailProduct.images.url} alt="" />
        {detailProduct.category === "61f3d9b908e72d203c44c95a" ? (
          <>
            <div className="product_category">
              <h3>მგზავრი</h3>
            </div>
            <div
              style={{ top: "70px", background: "#00799E", color: "white" }}
              className="product_category"
            >
              <h3>{detailProduct.quantity} ადამიანი</h3>
            </div>
          </>
        ) : (
          <>
            <div className="product_category">
              <h3>მანქანა</h3>
            </div>
            <div
              className="product_category"
              style={{ top: "70px", background: "#00799E", color: "white" }}
            >
              <h3>{detailProduct.quantity} ადგილი</h3>
            </div>
          </>
        )}
        <div className="product_box">
          <h2 title={detailProduct.title}>{detailProduct.title}</h2>
          <p>
            <i>გასვლის თარიღი</i>
          </p>
          {detailProduct.price &&
          detailProduct.category === "61f3d9b908e72d203c44c95a" ? (
            <span> ბიუჯეტი: {detailProduct.price}₾ </span>
          ) : (
            <span> საწვავის ხარჯი: {detailProduct.price}₾</span>
          )}
          <p className="product_description">{detailProduct.description}</p>

          {detailProduct.category !== "61f3d9b908e72d203c44c95a" &&
            detailProduct.middleLocations && (
              <p className="product_middle_locations">
                შემიძლია გავიარო:{" "}
                <span
                  style={{
                    background: "#EB7602",
                    curosr: "none",
                    borderRadius: "15px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <i>{detailProduct.middleLocations}</i>
                </span>
              </p>
            )}
          <a
            style={{
              textDecoration: "none",
              background: "#00799E",
              color: "white",
              padding: "5px 10px 5px 10px",
              borderRadius: "5px",
            }}
          >
            {detailProduct.content}
          </a>

          {/* <BtnRender product={product} deleteProduct={deleteProduct} /> */}
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h2>მსგავსი განცხადებები</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
