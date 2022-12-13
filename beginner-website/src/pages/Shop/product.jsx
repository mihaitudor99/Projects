import React from "react";
import ShopContext from "../../context/shop-context";
import { useContext } from "react";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price} RON</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
