import Call from "../../assets/icons/call";
import Email from "../../assets/icons/email";

const LeftContactSide = () => {
  return (
    <div className="w-full grid gap-y-8 rounded-lg bg-white shadow-lg p-10">
      <div className="">
        <div className="flex items-center mb-8 gap-4">
          <Call size={30} color="" />
          <span className="text-base text-gray-600">Call To Us</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-600">Phone: +8801611112222</p>
        </div>
      </div>
      <div className="w-full border border-black/40"></div>
      <div className="">
        <div className="flex items-center mb-8 gap-4">
          <Email size={30} color="" />
          <span className="text-base text-gray-600">Write To US</span>
        </div>
        <div className="text-gray-600 grid gap-y-2">
          <p className="">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="">Emails: customer@exclusive.com</p>
          <p className="">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContactSide;
