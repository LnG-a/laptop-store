import React from "react";
import "./style.css";
import Text from "../Text/Text";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img className="product-card-image" src={props.image}></img>
      <Text.ProductName name={props.name}></Text.ProductName>
      <Text.ProductAvailable
        quantity={props.availableQuantity}
      ></Text.ProductAvailable>
      <Text.ProductPrice price={props.price} discount={props.discountPercent}>
        {props.price}
      </Text.ProductPrice>
      <ProductCard.AddCart />
    </div>
  );
}

ProductCard.AddCart = function ProductCardAddCart() {
  return <button className="add-cart"> Thêm vào giỏ </button>;
};

export default ProductCard;
