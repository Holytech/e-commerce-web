import { useState } from "react";
import { aboutData } from "../../shared/constants/about-constant";
const AboutCenter = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] ">
        {aboutData.map((item) => (
          <div
            onClick={() => setSelected(item.id)}
            key={item.id}
            className={`${
              selected === item.id ? "bg-[#DB4444] " : ""
            } grid border place-content-center h-[200px] gap-y-3 rounded-md cursor-pointer`}
          >
            <div className="mx-auto">
              <item.icon
                size={60}
                color={selected === item.id ? "black" : "white"}
                fillColor={selected === item.id ? "white" : "black"}
              />
            </div>
            <p
              className={`${
                selected === item.id ? "text-white" : "text-black"
              } text-xl font-bold mx-auto`}
            >
              {item.count}
            </p>
            <p
              className={`${
                selected === item.id ? "text-white" : "text-black"
              } text-base font-normal mx-auto`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCenter;
