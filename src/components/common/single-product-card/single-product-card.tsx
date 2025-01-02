import { useState } from "react";
import { PRODUCT_CARD_CONSTANTS } from "../../../shared/constants/product-card";
import StarRating from "./star-rating";
import { Heart } from "lucide-react";
import DeliveryIcon from "../../../assets/icons/delivery-icon";
import Rotate from "../../../assets/icons/rotate";
import ProductCard from "../product/product-card";

const SingleProductCard = () => {
  const [selectColor, setSelectColor] = useState("");
  const [selectSize, setSelectSize] = useState("");
  const [selectQuantity, setSelectQuantity] = useState(1);
  const [bigCardIndex, setBigCardIndex] = useState(
    PRODUCT_CARD_CONSTANTS?.images.length - 1
  );

  const handleCardClick = (index: any) => {
    setBigCardIndex(index);
  };
  return (
    <div>
      <div className="mx-auto  w-full grid min-h-screen lg:grid-cols-[1fr_1fr] content-start  gap-4 ">
        <div className="grid w-full grid-flow-col  gap-4  p-4">
          <div className="flex min-w-[100px] flex-col  gap-8">
            {PRODUCT_CARD_CONSTANTS?.images.map(
              (item, index) =>
                index !== bigCardIndex && (
                  <img
                    className="min-w-28  h-32 object-contain bg-gray-100 rounded-md cursor-pointer"
                    key={index}
                    src={PRODUCT_CARD_CONSTANTS?.images[index]}
                    alt={item}
                    onClick={() => handleCardClick(index)}
                  />
                )
            )}
          </div>
          <img
            src={PRODUCT_CARD_CONSTANTS?.images[bigCardIndex]}
            alt={""}
            width={"100%"}
            height={"100%"}
            className="w-full  h-[500px] bg-gray-100 object-contain rounded-md content-start items-start"
          />
        </div>

        <div className="p-4 ">
          <div className="grid gap-y-3">
            <h1 className="text-[24px] font-semibold ">
              {PRODUCT_CARD_CONSTANTS?.name}{" "}
            </h1>

            <div className="flex items-center gap-2">
              <StarRating rating={PRODUCT_CARD_CONSTANTS?.rating} />
              <div className="">
                <span className="text-gray-600">
                  ({PRODUCT_CARD_CONSTANTS?.rating * 20} Reviews)
                </span>
                <span className="mx-1 text-gray-600">|</span>{" "}
                {PRODUCT_CARD_CONSTANTS?.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}{" "}
              </div>
            </div>
            <p className="text-gray-500 ">$ {PRODUCT_CARD_CONSTANTS?.price} </p>
            <p className="text-gray-500 text-sm">
              {PRODUCT_CARD_CONSTANTS?.desc}
            </p>
            <div className="w-full border-b-2"></div>
            <div className="flex gap-2 items-center mt-2">
              <span className="capitalize text-gray-600">colors:</span>{" "}
              {PRODUCT_CARD_CONSTANTS.colours.map((item, index) => (
                <div
                  onClick={() => setSelectColor(item)}
                  key={index}
                  className={`${
                    selectColor === item ? "border-2 border-gray-800" : ""
                  }   rounded-full w-6 h-6 flex  items-center justify-center`}
                >
                  <div
                    className={`border-2 w-5 h-5 border-white `}
                    style={{
                      backgroundColor: item,
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex items-center  gap-3 mt-2">
              <span className="mr-2 text-gray-600">Size:</span>
              {PRODUCT_CARD_CONSTANTS.size.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectSize(item)}
                  className={`${
                    selectSize === item
                      ? "bg-red-500 text-white"
                      : " text-gray-600"
                  } flex items-center gap-2 border min-w-[30px] justify-center rounded-md cursor-pointer`}
                >
                  {item}{" "}
                </div>
              ))}
            </div>
            <div className="flex items-center justifty-between w-full  gap-8 md:gap-1 mt-2">
              <div className="flex items-center  ">
                <span
                  onClick={() =>
                    setSelectQuantity(
                      selectQuantity <= 1 ? selectQuantity : selectQuantity - 1
                    )
                  }
                  className="flex p-1 items-center border min-w-[40px] justify-center text-black rounded-sm cursor-pointer"
                >
                  -
                </span>
                <span className="flex p-1 items-center border min-w-[100px] justify-center text-black rounded-sm cursor-pointer">
                  {" "}
                  {selectQuantity}
                </span>
                <span
                  onClick={() =>
                    setSelectQuantity(
                      selectQuantity === 9 ? selectQuantity : selectQuantity + 1
                    )
                  }
                  className="flex p-1 items-center border min-w-[40px] justify-center text-black rounded-sm cursor-pointer"
                >
                  +
                </span>
              </div>
              <div className="flex items-center justify-end  w-full gap-2 ">
                <button className="bg-red-500 capitalize text-white px-4 py-1 max-w-[100px] rounded-md w-full">
                  buy now
                </button>
                <button className="  border p-1  flex items-center justify-center text-center rounded-md ">
                  <Heart className=" w-[32px]" />
                </button>
              </div>
            </div>
            <div className="border grid rounded-md mt-4">
              <div className="flex items-center  gap-3 w-full p-4">
                <DeliveryIcon size={30} color="" />
                <div className="">
                  <h1 className="text-base font-normal">Free Delivery</h1>
                  <p className="text-sm text-gray-500">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="border-b w-full"></div>
              <div className="flex items-center  gap-3 w-full p-4">
                <Rotate size={30} color="" />
                <div className="">
                  <h1 className="text-base font-normal">Return Delivery</h1>
                  <p className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex  items-center my-10 gap-3">
          <div className="h-full w-2 bg-[#DB4444] text-[#DB4444] rounded-sm">
            |
          </div>
          <h1 className="text-[#DB4444] font-semibold text-xl ">
            Related Item
          </h1>
        </div>
        <ProductCard />
      </div>
    </div>
  );
};

export default SingleProductCard;
