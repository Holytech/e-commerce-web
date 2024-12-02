import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="gird min-h-screen max-w-6xl my-auto mx-auto px-6 md:px-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
