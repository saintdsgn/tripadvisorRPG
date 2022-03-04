import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import Loading from "../utils/loading/Loading";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

const initialState = {
  product_id: "",
  price: 0,
  description: "",
  content: "",
  category: "",
  startLocation: "",
  finalLocation: "",
};

function CreateProduct() {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);
  const [categories] = state.categoriesAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  const history = useHistory();
  const param = useParams();

  const [products] = state.productsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.productsAPI.callback;
  const [categoryState, setCategoryState] = useState("");
  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [param.id, products]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      // if(!isAdmin) return alert("You're not an admin")
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setLoading(false);
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      // if(!isAdmin) return alert("You're not an admin")
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    if (name === "category" && value === "61f3d9b908e72d203c44c95a") {
      setCategoryState("61f3d9b908e72d203c44c95a");
    } else if (name === "category" && value === "61f3d9c008e72d203c44c95f") {
      setCategoryState("61f3d9c008e72d203c44c95f");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if(!isAdmin) return alert("You're not an admin")
      if (!images) return alert("No Image Upload");

      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          "/api/products",
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      }
      setCallback(!callback);
      history.push("/");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <div className="create_product">
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ""} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {/* <div className="row">
          <label htmlFor="product_id">უნიკალური კოდი</label>
          <input
            type="text"
            name="product_id"
            id="product_id"
            // required
            value={product.product_id}
            onChange={handleChangeInput}
            disabled={onEdit}
          />
        </div> */}
        {/* <div className="row">
          <label htmlFor="content">სათაური</label>
          <input
            type="text"
            name="title"
            placeholder=""
            required
            rows="7"
            onChange={handleChangeInput}
          />
        </div> */}
        <div className="row">
          <label htmlFor="categories">ვეძებ: </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChangeInput}
          >
            <option value="">აირჩიეთ</option>
            {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          <label htmlFor="content">საწყისი პუნქტი</label>
          <input
            type="text"
            name="startLocation"
            placeholder="მაგ: ბათუმი"
            required
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">დანიშნულების ადგილი</label>
          <input
            type="text"
            name="finalLocation"
            placeholder="მაგ: თბილისი"
            required
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          {categoryState === "61f3d9b908e72d203c44c95a" ? (
            <label htmlFor="price">
              ბიუჯეტი(₾)
              <span style={{ color: "grey" }}>
                <i> - ეს ველი ნებაყოფლობითია</i>
              </span>
            </label>
          ) : (
            <label htmlFor="price">
              საწვავის ხარჯი(₾){" "}
              <span style={{ color: "grey" }}>
                <i> - ეს ველი ნებაყოფლობითია</i>
              </span>
            </label>
          )}
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          {categoryState === "61f3d9b908e72d203c44c95a" ? (
            <label htmlFor="price">მგზავრების რაოდენობა</label>
          ) : (
            <label htmlFor="price">
              მანქანაში თავისუფალი ადგილების რაოდენობა
            </label>
          )}

          <input
            type="number"
            name="quantity"
            id="quantity"
            required
            defaultValue={product.quantity}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          {categoryState !== "61f3d9b908e72d203c44c95a" && (
            <label htmlFor="price">
              შემიძლია გავიარო:
              <span style={{ color: "grey" }}>
                <i> - ეს ველი ნებაყოფლობითია</i>
              </span>
            </label>
          )}
          <input
            type="text"
            name="middleLocations"
            id="price"
            defaultValue={product.middleLocations}
            placeholder="მაგ: რუსთავი, გორი"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="description">აღწერა</label>
          <textarea
            type="text"
            name="description"
            id="description"
            required
            defaultValue={product.description}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">საკონტაქტო ნომერი</label>
          <input
            type="text"
            name="content"
            id="content"
            required
            placeholder="მაგ: 555 555 555"
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <button
          style={{
            background: "#EB7602",
            color: "white",
            borderRadius: "25px",
            padding: "10px",
            fontSize: "16px",
          }}
          type="submit"
        >
          {onEdit ? "Update" : "მზადაა"}
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
