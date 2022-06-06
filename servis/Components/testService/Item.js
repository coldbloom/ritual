import React, { useState } from "react";

const Item = ({ item, activeId, papaFunc }) => {
  const [bool] = useState(false);
  const click = () => {
    papaFunc({
      id: item.id,
      content: item.content,
    });
  };

  return (
    <button
      className={`border-t-4 border py-4 w-full lg:px-2 flex justify-center ${
        activeId === item.id ? "border-t-amber-900 bg-amber-700" : ""
      }`}
    >
      <h2 onClick={click} className={bool ? "text-red-700" : "text-white"}>
        {item.name}
      </h2>
    </button>
  );
};

export default Item;
