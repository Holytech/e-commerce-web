import Delivery from "../../assets/icons/delivery";
import MoneyBack from "../../assets/icons/money-back";
import CustomerService from "../../assets/icons/customer-service";

const AboutButton = () => {
  type aboutServicesProps = {
    id: string;
    icon: ({ size }: { size: number }) => JSX.Element;
    title: string;
    terms: string;
  };
  const aboutServices: aboutServicesProps[] = [
    {
      id: "1",
      icon: Delivery,
      title: "FREE AND FAST DELIVERY",
      terms: "Free delivery for all orders over $140",
    },
    {
      id: "2",
      icon: CustomerService,
      title: "24/7 CUSTOMER SERVICE",
      terms: "Friendly 24/7 customer support",
    },
    {
      id: "3",
      icon: MoneyBack,
      title: "MONEY BACK GUARANTEE",
      terms: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="grid  mb-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-10 gap-x-12">
      {aboutServices.map((service) => (
        <div key={service.id} className="flex flex-col gap-4 items-center mb-4">
          <service.icon size={50} />
          <div className="flex flex-col gap-1 items-center ">
            <h1 className="text-[20px] font-semibold text-center ">
              {service.title}
            </h1>
            <p className="text-[14px]">{service.terms} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutButton;
