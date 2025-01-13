import { ReactNode } from "react";
import CarouselControl from "../../carousel-control";

interface HeaderProps {
  title: string;
  label: string;
  timer?: ReactNode;
  children?: ReactNode;
  slider?: boolean;
  sliderRef?: React.RefObject<HTMLDivElement>;
  sliderType?: "productSlider" | "categorySlider" | "thisMonth";
}

export const SectionHeader = ({
  title,
  label,
  timer,
  children,
  slider,
  sliderRef,
  sliderType,
}: HeaderProps) => {
  return (
    <section className="flex justify-between w-full">
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="text-primary flex gap-[10px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm"></div>
            <p className="font-semibold text-base text-[#DB4444]">{label}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-4xl font-semibold">{title}</h3>
            {slider && (
              <div className="flex items-center gap-5">
                <CarouselControl
                  sliderRef={sliderRef}
                  sliderType={sliderType}
                />
              </div>
            )}
          </div>
        </div>
        {timer && <div className="mt-auto">{timer}</div>}
      </div>
      {children}
    </section>
  );
};
