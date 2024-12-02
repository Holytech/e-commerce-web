import abouthero from "../../assets/images/about-hero-picture.png";
const AboutTop = () => {
  return (
    <div className="grid md:grid-flow-col  gap-2">
      <div className="grid gap-y-10 content-start w-full my-auto ">
        <h1 className="text-3xl font-semibold capitalize">Our Story</h1>
        <div className="grid gap-y-4">
          <p className="">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.{" "}
          </p>
        </div>
      </div>
      <div className="w-full relative ">
        <img
          src={abouthero}
          alt="about-hero-picture"
          className=" rounded-sm "
        />
      </div>
    </div>
  );
};

export default AboutTop;
