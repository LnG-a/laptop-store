import React from "react";
import "./style.css";

function Text(props) {
  return <div>{props.content}</div>;
}

function numberWithCommas(num) {
  return num.toLocaleString();
}

Text.Title = function FromTitle(props) {
  return <h1> {props.content}</h1>;
};

Text.MainProductName = function MainProductName(props) {
  return <div className="main-product-name"> {props.name}</div>;
};

Text.MainProductPrice = function MainProductPrice(props) {
  const newPrice =
    parseInt(props.price) -
    parseInt(props.price) * (parseInt(props.discount) / 100);
  return (
    <>
      {props.discount == "" ? (
        <div className="main-price">{numberWithCommas(props.price) + "đ"}</div>
      ) : (
        <>
          <div className="main-price">{numberWithCommas(newPrice) + "đ"}</div>
          <span className="main-old-price">
            {numberWithCommas(props.price) + "đ"}
          </span>
          <span className="main-discount">{props.discount}%</span>
        </>
      )}
    </>
  );
};

Text.MainProductSeller = function MainProductSeller(props) {
  const seller = props.seller.toUpperCase();

  return (
    <div>
      <span className="by">By </span>{" "}
      <span className="seller">{" " + seller}</span>
    </div>
  );
};

Text.ProductName = function ProductName(props) {
  return <div className="product-name"> {props.name}</div>;
};

Text.ProductPrice = function ProductPrice(props) {
  const newPrice =
    parseInt(props.price) -
    parseInt(props.price) * (parseInt(props.discount) / 100);
  return (
    <>
      {props.discount == "" ? (
        <div className="price">{numberWithCommas(props.price) + "đ"}</div>
      ) : (
        <>
          <div className="price">{numberWithCommas(newPrice) + "đ"}</div>
          <span className="old-price">
            {numberWithCommas(props.price) + "đ"}{" "}
          </span>
          <span className="discount">{props.discount}%</span>
        </>
      )}
    </>
  );
};

Text.ProductAvailable = function ProductAvailable(props) {
  return (
    <>
      <div className="warning">{"Còn " + props.quantity + " sản phẩm"}</div>
    </>
  );
};

export default Text;
