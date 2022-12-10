import React from "react";
import { Star, ShoppingBag } from "phosphor-react";

interface Items {
  id: string;
  color: string;
  shadow: string;
  title: string;
  text: string;
  img: string;
  btn: string;
  rating: string;
  price: string;
}
const Product = ({
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}: Items) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 mt-7`}
    >
      <div className="grid items-center justify-items-center">
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>
        <div className="flex items-center justify-between w-28">
          <div className="flex items-center bg-white/80 px-1 rounded">
            <h1>${price} </h1>
          </div>
          <div className="flex items-center">
            <Star
              size={16}
              weight="fill"
              className="icon-style text-slate-900 w-5 h-5 md:h-4 md:w-4 text-white"
            />
            <h1 className="md:text:sm font-normal text-slate-100">{rating}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className=" bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200">
            <ShoppingBag
              size={32}
              weight="fill"
              className="icon-style text-slate-900 "
            />
          </button>
          <button className=" bg-white/90 blur-effect-theme button-theme px-1.5 shadow shadow-sky-200 text-black">
            {btn}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="h-36 w-64 transitions-theme hover:-rotate-12"
          src={img}
          alt="item-image"
        />
      </div>
    </div>
  );
};

export default Product;
