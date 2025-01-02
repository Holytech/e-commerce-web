import StarRating from "./star-rating";
import { Heart } from "lucide-react";

export type CardType = {
  id: string;
  img: string;
  name: string;
  star?: number;
  color: string[];
  isNew?: boolean;
  discountPrice?: string;
  isLiked?: boolean;
  key: number;
  price: number;
};
const SingleCard: React.FC<CardType> = ({
  img,
  name,
  discountPrice,
  key,
  star,
  isLiked = true,
  price,
  isNew = false,
}) => {
  return (
    <div
      key={key}
      className="h-[322px] grid bg-[#F5F5F5]  items-center mx-auto relative group min-w-[270px]"
    >
      <img
        src={img}
        alt="Description"
        style={{ height: "150px" }}
        className="object-contain w-[118px] grid mx-auto my-auto"
      />
      <div className="absolute top-3 right-4 flex  gap-3">
        <div className="w-[32px] h-[32px] bg-white rounded-full grid items-center justify-center">
          {isLiked && <Heart className="w-[20px] h-[20px]" />}
        </div>
      </div>
      <button
        type="submit"
        className="bg-black py-2 text-white text-center flex items-center justify-center rounded-none absolute w-full bottom-[110px] group-hover:bottom-[130px] capitalize  opacity-0 font-semibold   group-hover:opacity-100 group-hover:flex transition-all duration-500"
      >
        Add to cart
      </button>
      <div className="bg-white w-full h-full">
        <div className=" py-2 ">
          <p className="font-semibold capitalize text-base">{name} </p>
          <div className="flex items-center gap-2 my-2">
            <p className="text-red-500 text-sm font-semibold">${price} </p>
            <StarRating rating={star as number} />
          </div>
        </div>
        <div className="absolute  top-2 left-3 flex flex-col items-center gap-1">
          {isNew && (
            <p className=" capitalize  bg-green-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              new
            </p>
          )}

          {discountPrice && (
            <p className=" capitalize  bg-red-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              {discountPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
