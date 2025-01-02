import React, { useState } from "react";
import heart from "../../../assets/icons/heart.png";
import StarRating from "./StarRating";
import { IProductCard } from "../../../shared/types";

const SingleCard: React.FC<IProductCard> = ({
  id,
  img,
  name,
  discountPrice,
  discountPercentage,
  star,
  isLiked = true,
  price,
  color = [],
  isNew = false,
  totalSold,
}) => {
  const [select, setSelected] = useState("");

  const handleSelect = (item: string) => {
    setSelected(item);
  };
  return (
    <div
      key={id}
      className="h-[322px] grid bg-[#F5F5F5]  items-center mx-auto relative group w-[270px]"
    >
      <img
        src={img}
        alt="Description"
        style={{ height: "150px" }}
        className="object-contain w-[118px] grid mx-auto my-auto"
      />
      <div className="absolute top-3 right-4 flex  gap-3">
        <div className="w-[32px] h-[32px] bg-white rounded-full grid items-center justify-center">
          {isLiked && (
            <img
              src={heart}
              alt=""
              className="w-[20px] h-[20px] object-contain cursor-pointer"
            />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white text-center py-2 absolute bottom-[110px] group-hover:bottom-[130px] capitalize  opacity-0 font-semibold  group-hover:opacity-100 transition-all duration-500"
      >
        Add to cart
      </button>
      <div className="bg-white w-full h-full">
        <div className=" py-2 ">
          <p className="font-semibold capitalize text-base">{name} </p>
          <div className="flex flex-col items-start gap-2 my-2">
            <p className="text-red-500 text-sm font-semibold flex gap-2 items-center">
              <span>${price}</span>
              {discountPrice && (
                <span className="line-through">${discountPrice}</span>
              )}
            </p>
            <div className="flex gap-2">
              <StarRating rating={star as number} />
              {totalSold && (
                <p className="text-sm text-gray-400 font-Poppins">
                  ({totalSold})
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="absolute  top-2 left-3 flex flex-col items-center gap-1">
          {isNew && (
            <p className=" capitalize  bg-green-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              new
            </p>
          )}

          {discountPercentage && (
            <p className=" capitalize  bg-red-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              {discountPercentage}
            </p>
          )}
        </div>
        <div className="flex gap-1 bg-white">
          {color.map((item, idx) => (
            <div
              className="flex gap-1 "
              key={idx}
              onClick={() => handleSelect(item)}
            >
              <div
                style={{
                  backgroundColor: item,
                  borderColor: select === item ? "black" : "transparent",
                }}
                className={` w-4 h-4 rounded-full border-2  relative`}
              >
                <div
                  className={`${
                    item === select
                      ? "absolute left-0 top-0 border-2 rounded-full border-white w-3 h-3"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
