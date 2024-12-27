import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";
import scan from "../../../assets/images/scan.png";
import apple from "../../../assets/images/apple.png";
import google from "../../../assets/images/google.png";
import { footerLinkItem } from "../../../shared/constants/footer-constant";

const Footer = () => {
  return (
    <>
      <div className="bg-[#000000] p-[80px]   ">
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            maxWidth: "1170px",
          }}
          className="grid mx-auto  gap-x-5 gap-y-10 "
        >
          <div className="grid gap-y-4 content-start ">
            <p className="text-[24px] font-[700] text-white ">Exclusive</p>
            <p className="text-[16px] font-[500] text-white">Subscribe</p>
            <p className="text-[16px] font-[400] text-white">
              Get 10% off your first order
            </p>
            <div className="relative">
              <SendHorizontal className="text-white absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-[50%] " />
              <input
                type="text"
                className="outline-none p-2 w-full h-full bg-transparent text-white rounded-md border placeholder:text-gray-400 border-white"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <>
            {footerLinkItem.map((item) => (
              <div
                className="flex flex-col gap-y-5 content-start"
                key={item.name}
              >
                <p className="text-[24px] font-[700] text-white">{item.name}</p>
                {item.links.map((link) => (
                  <a href={link.path} className="text-white">
                    {link.title}{" "}
                  </a>
                ))}
              </div>
            ))}
          </>

          <div className="grid gap-y-4 content-start">
            <p className="text-[18px] font-[500] text-white ">Download App</p>
            <p className="text-[16px] font-[400] text-white">
              Save $3 with App New User Only
            </p>
            <div className=" flex gap-1 ">
              <img src={scan} className=" object-contain" />
              <div className="flex w-1/2 h-full flex-col  gap-4">
                <img
                  src={google}
                  className="w-full  bg-white object-contain  "
                />
                <img src={apple} className="w-full   object-contain" />
              </div>
            </div>
            <div className="flex gap text-white gap-7">
              <Facebook size={20} className="cursor-pointer" />

              <Twitter size={20} className="cursor-pointer" />
              <Instagram size={20} className="cursor-pointer" />
              <Linkedin size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
