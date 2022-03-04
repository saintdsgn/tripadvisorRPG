import React from "react";
import BtnRender from "./BtnRender";
import { Link } from "react-router-dom";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  return (
    <>
      <Link to={`/detail/${product._id}`}>
        <div className="product_card">
          {/* {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            } */}
          <img src={product.images.url} alt="" />
          {product.category === "61f3d9b908e72d203c44c95a" ? (
            <>
              <div className="product_category">
                <h3>მგზავრი</h3>
              </div>
              <div
                style={{ top: "70px", background: "#00799E", color: "white" }}
                className="product_category"
              >
                <h3>{product.quantity} ადამიანი</h3>
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
                <h3>{product.quantity} ადგილი</h3>
              </div>
            </>
          )}
          <div className="product_box">
            <h2 title={product.title}>{product.title}</h2>
            <p>
              <i>გასვლის თარიღი</i>
            </p>
            {product.price &&
            product.category === "61f3d9b908e72d203c44c95a" ? (
              <span> ბიუჯეტი: {product.price}₾ </span>
            ) : (
              <span> საწვავის ხარჯი: {product.price}₾</span>
            )}
            <p className="product_description">{product.description}</p>

            {product.category !== "61f3d9b908e72d203c44c95a" &&
              product.middleLocations && (
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
                    <i>{product.middleLocations}</i>
                  </span>
                </p>
              )}

            {/* <BtnRender product={product} deleteProduct={deleteProduct} /> */}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
