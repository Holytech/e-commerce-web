import SingleCard from "../../../../components/common/SingleCard";
import { thisMonthProductsData } from "../../../../data/productsData";
import { IProductCard } from "../../../../shared/types";
import { SectionHeader } from "../SectionHeader";

export const ThisMonth = () => {
  return (
    <section className="grid gap-[3.75rem]">
      <SectionHeader label="This Month" title="Best Selling Products" />
      <div className="flex gap-[1.875rem]">
        {thisMonthProductsData.map((item: IProductCard) => (
          <SingleCard {...item} />
        ))}
      </div>
    </section>
  );
};
