import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full px-6 py-8 flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-40" />
        <img src={Hamburger} alt="hamburger" className="cursor-pointer" />
      </div>
      <div className="mt-10">
        <ul className="flex flex-col justify-center items-center gap-8 py-10">
          <li>
            <Link
              to="/"
              className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize"
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              to="/plan"
              className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize"
            >
              create your plan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
