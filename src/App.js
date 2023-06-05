import "./App.css";
import { useEffect, useState } from "react";
import Text from "./components/Text/Text";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [mainProduct, setMainProduct] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let res = require("./data.json");
    setMainProduct({
      id: res.id,
      name: res.name,
      image: res.image,
      availableQuantity: res.availableQuantity,
      price: res.price,
      discountPercent: res.discountPercent,
      seller: res.seller,
    });
    var _res = res.relatedProducts.map((item) => {
      var _item = {
        id: item.id,
        name: item.name,
        image: item.image,
        availableQuantity: item.availableQuantity,
        price: item.price,
        discountPercent: item.discountPercent,
      };
      return _item;
    });
    setData(_res);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="main-product">
        <img src={mainProduct.image} alt={"Ảnh" + mainProduct.name}></img>
        <Text.MainProductPrice
          price={mainProduct.price}
          discount={mainProduct.discountPercent}
        ></Text.MainProductPrice>
        <Text.MainProductName name={mainProduct.name}></Text.MainProductName>
        <Text.MainProductSeller
          seller={mainProduct.seller}
        ></Text.MainProductSeller>
      </div>
      <div className="related-product">
        {data.map((item) => (
          <>
            <ProductCard
              image={item.image}
              name={item.name}
              availableQuantity={item.availableQuantity}
              price={item.price}
              discountPercent={item.discountPercent}
            ></ProductCard>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
