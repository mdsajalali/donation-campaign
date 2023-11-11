import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const Root = () => {
  return (
    <>
      <div className="bg-[#F4F5F5]">
        <div className="lg:container mx-auto p-5  ">
          <Header />
        </div>
      </div>
      <Outlet /> 
      <Footer />
    </>
  );
};

export default Root;
