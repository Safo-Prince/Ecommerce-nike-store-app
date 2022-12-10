import React from "react";
import Product from "./common/Product";
import Title from "./common/Title";
interface Popularsales {
  isPopularSalesContainer: true;
}
interface Items {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

interface Content {
  title: string;
  items: Items[];
}

const Sales = (
  { isPopularSalesContainer }: Popularsales,
  { title, items }: Content
) => {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center grid-cols-4 xl:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7 `}
      >
        {items.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
