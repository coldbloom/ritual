import React from "react";
import Image from "next/image";
// import crossWhite3 from "./../../assets/productsImages/crossWhite3.svg";
// import candle from "./../../assets/productsImages/candle2.png";
// import pillowWhite from "./../../assets/productsImages/pillowWhite.svg";
import wreathWhite from "./../../assets/productsImages/wreathWhite.svg";
// import graveWhite from "./../../assets/productsImages/graveWhite.svg";
import coffinWhite2 from "./../../assets/productsImages/coffinWhite2.svg";
import ProductItem from "./ProductItem";

const data = [
  {
    id: "_id73ui562",
    image: wreathWhite,
    title: "Венки",
    products: [
      "Венки искусственные",
      "Траурные корзины",
      "Венки из живых цветов",
      "Венки с лентой",
    ],
  },
  {
    id: "_id278654137",
    image: coffinWhite2,
    title: "Гробы",
    products: [
      "Гробы обитые тканью",
      "Лакированные гробы",
      "Мусульманские гробы",
      "Недорогие гробы",
      "Цинковые гробы",
      "Элитные гробы",
      "Детские гробы",
    ],
  },
  // {
  //   id: "_id89rjk443",
  //   image: crossWhite3,
  //   title: "Кресты на могилу",
  //   products: (
  //     <ul className="list-disc ml-6 mr-2">
  //       <li>Металлические кресты</li>
  //       <li>Деревянные кресты</li>
  //       <li>Православные кресты</li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: "_id89rjk8743",
  //   image: graveWhite,
  //   title: "Памятники",
  //   products: (
  //     <ul className="list-disc ml-6 mr-2">
  //       <li>Металлические кресты</li>
  //       <li>Деревянные кресты</li>
  //       <li>Православные кресты</li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: "_id6h7ukl9bv43",
  //   image: pillowWhite,
  //   title: "Текстиль",
  //   products: (
  //     <ul className="list-disc ml-6 mr-2">
  //       <li>Подушка в гроб</li>
  //       <li>Саван</li>
  //       <li>Одежда для похорон</li>
  //       <li>Одежда для похорон женщины</li>
  //       <li>Платья для похорон</li>
  //       <li>Покрывала в гроб</li>
  //       <li>Комплекты</li>
  //     </ul>
  //   ),
  // },
  // {
  //   id: "_id21hy21gt122t11r2f3",
  //   image: candle,
  //   title: "Аксессуары",
  //   products: (
  //     <ul className="list-disc ml-6 mr-2">
  //       <li>Платки на похороны</li>
  //       <li>Похоронные тапки</li>
  //       <li>Траурные букеты</li>
  //       <li>Урны для кремации</li>
  //       <li>Траурная композиция</li>
  //       <li>Гирлянды траурные в изголовье гроба</li>
  //       <li>Комплекты</li>
  //       <li>Лента на венок</li>
  //     </ul>
  //   ),
  // },
];

const Products = () => (
  <div>
    <h2 className="font-bold text-3xl pt-20 flex justify-center">Товары</h2>
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="border m-2 py-2 my-4 first:my-2 last:my-0 bg-red-700 text-white"
        >
          <div className="flex row justify-center">
            <div className="flex w-12 bg-red-700">
              <Image src={item.image} alt="logo" />
            </div>
            <h3 className="text-2xl font-semibold ml-3 flex items-center">
              {item.title}
            </h3>
          </div>
          <div className="flex justify-center font-semibold">Подробнее</div>
          <ProductItem productList={item.products} />
        </div>
      ))}
    </div>
  </div>
);

export default Products;
