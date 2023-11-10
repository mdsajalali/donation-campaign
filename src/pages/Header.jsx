import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.png";
const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5 z-10">
      <div>
        <Link to="/">
          <img className="w-32 md:w-44" src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10 text-[16px] md:text-[18px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation">Donation</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
