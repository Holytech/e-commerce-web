import LeftContactSide from "./left-contact-side";
import RightContactSide from "./right-contact-side";

const Contact = () => {
  return (
    <div className="grid  content-start xl:grid-flow-col xl:grid-cols-[40%_60%]  gap-2 w-full items-center min-h-screen max-w-6xl my-auto mx-auto  grid-rows-[auto] ">
      <div className=" w-full h-full ">
        <LeftContactSide />
      </div>
      <div className="w-full h-full ">
        <RightContactSide />
      </div>
    </div>
  );
};

export default Contact;
