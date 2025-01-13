import { useRef } from "react";
import SingleCard from "../../../../components/common/SingleCard";
import { thisMonthProductsData } from "../../../../data/productsData";
import { IProductCard } from "../../../../shared/types";
import { SectionHeader } from "../SectionHeader";

export const ThisMonth = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="grid gap-[3.75rem]">
      <SectionHeader
        label="This Month"
        title="Best Selling Products"
        slider={true}
        sliderRef={sliderRef}
        sliderType="thisMonth"
      />
      <div
        className="flex w-full gap-5 overflow-x-scroll scrollbar-hide"
        ref={sliderRef}
      >
        {thisMonthProductsData.map((item: IProductCard) => (
          <SingleCard {...item} />
        ))}
      </div>
    </section>
  );
};
