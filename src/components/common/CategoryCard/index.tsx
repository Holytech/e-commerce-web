import React, { SetStateAction } from "react";
import { IProductCategory } from "../../../shared/types";

interface CategoryCardProps {
  category: IProductCategory;
  currCategory: string;
  setCurrCategory: React.Dispatch<SetStateAction<string>>;
}

const CategoryCard = ({
  category,
  currCategory,
  setCurrCategory,
}: CategoryCardProps) => {
  return (
    <div
      key={category?.id}
      className={`${
        currCategory === category.name
          ? "bg-[#DB4444] text-white"
          : "bg-white text-black"
      } cursor-pointer border rounded-lg flex flex-col items-center py-10`}
      onClick={() => setCurrCategory(category.name)}
    >
      <img
        src={
          currCategory === category.name
            ? category?.icon?.light
            : category?.icon?.dark
        }
        alt={category?.name || category?.name + "category's icon"}
      />
      <p>{category?.name}</p>
    </div>
  );
};

export default CategoryCard;
