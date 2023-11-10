import logo from "../assets/images/Logo.png";
const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5">
      <div>
        <img className="w-32 md:w-44" src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-10 text-[16px] md:text-[18px]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Donation</a>
          </li>
          <li>
            <a href="/">Statistics</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
