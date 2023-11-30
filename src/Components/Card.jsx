import { clsx } from "clsx";
import React, { Fragment } from "react";
import { iconCart, imageProductDesktop, imageProductMobile } from "./Image";
const Card = () => {
  return (
    <Fragment>
      <div className="w-[275px] md:w-[600px] grid md:grid-cols-[50%_50%] grid-cols-1 rounded-[1rem] overflow-hidden">
        <img
          src={imageProductMobile}
          alt="product image"
          className="h-full md:hidden block"
        />
        <img
          src={imageProductDesktop}
          alt="product image"
          className="h-full md:block hidden"
        />
        <div className="bg-white p-8 flex flex-col justify-between gap-4">
          <p className="tracking-[4px] text-Dark_grayish_blue uppercase">
            Perfume
          </p>
          <p className="f-bold text-[2.5rem] leading-[2rem] text-Very_dark_blue">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="text-Dark_grayish_blue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <p className="flex items-center gap-4">
              <span className="f-bold text-[2.5rem] text-Dark_cyan">
                $149.99
              </span>{" "}
              <span className="text-Dark_grayish_blue">$169.99</span>
            </p>
            <button className="flex gap-2 items-center justify-center text-Cream bg-Dark_cyan hover:bg-hover_Dark_cyan w-full p-4 rounded-[0.5rem] transition-colors">
              <img src={iconCart} alt="shopping cart icon" />
              <span className="font-bold">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
