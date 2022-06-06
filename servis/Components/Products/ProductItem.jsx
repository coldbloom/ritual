import React, { useState } from "react";

const ProductItem = ({ productList }) => {
  const [activeProd, setActiveProd] = useState("");

  const changeBg = (item) => () =>
    setActiveProd((prev) => (prev === item ? "" : item));

  return (
    <ul>
      {productList.map((prod) => (
        <li
          key={prod}
          onClick={changeBg(prod)}
          className={activeProd === prod ? "bg-blue-700" : ""}
        >
          {prod}
        </li>
      ))}
    </ul>
  );
};

export default ProductItem;
