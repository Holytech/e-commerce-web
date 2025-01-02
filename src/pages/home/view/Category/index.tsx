import { useState } from "react";
import CategoryCard from "../../../../components/common/CategoryCard";
import { productCategories } from "../../../../data/productCategories";
import { IProductCategory } from "../../../../shared/types";
import { SectionHeader } from "../SectionHeader";

const Category = () => {
  const [currCategory, setCurrCategory] = useState("");
  return (
    <section className="w-full flex flex-col gap-5 mb-10">
      <SectionHeader label="Categories" title="Browse by category" />
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {productCategories?.map((category: IProductCategory) => (
          <CategoryCard
            category={category}
            currCategory={currCategory}
            setCurrCategory={setCurrCategory}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
