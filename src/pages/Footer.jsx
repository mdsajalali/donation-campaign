import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className="bg-[#F4F5F5] py-3 text-center border-t text-[14px]">
      Copyright @ {year} Designed by{" "}
      <Link
        to="https://sajalali.vercel.app/"
        className="font-bold hover:underline cursor-pointer"
      >
        Md. Sajal Ali
      </Link>
    </div>
  );
};

export default Footer;
