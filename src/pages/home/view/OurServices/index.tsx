import { ServiceList } from "../../../../data/ServiceList";

export const OurServices = () => {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 place-items-center py-5">
      {ServiceList.map((item) => (
        <div
          key={item.id}
          className="font-poppins flex flex-col items-center gap-[.3rem]"
        >
          <div className="w-[20%] pb-[.5rem]">
            <img className="w-full" src={item.img} alt="" />
          </div>
          <h2 className="font-Poppins font-bold text-2xl">{item.title}</h2>
          <p className="text-lg">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
