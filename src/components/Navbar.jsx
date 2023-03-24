import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Close from "../assets/shared/mobile/icon-close.svg";
import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const openNavbar = () => {
    setIsNavVisible(true);
  };

  const closeNavbar = () => {
    setIsNavVisible(false);
  };

  return (
    <nav className="w-full">
      <div className="w-full px-6 py-8 flex justify-between items-center md:hidden">
        <img src={Logo} alt="logo" className="w-40" />
        {isNavVisible ? (
          <img
            src={Close}
            alt="close"
            className="w-4 cursor-pointer"
            onClick={closeNavbar}
          />
        ) : (
          <img
            src={Hamburger}
            alt="hamburger"
            className="w-4 cursor-pointer"
            onClick={openNavbar}
          />
        )}
      </div>
      {isNavVisible ? (
        <div className="mt-10 md:hidden">
          <ul className="flex flex-col justify-center items-center gap-8 py-10">
            <li>
              <Link
                to="/"
                className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize hover:text-dark-cyan transition-colors duration-300"
                onClick={closeNavbar}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize hover:text-dark-cyan transition-colors duration-300"
                onClick={closeNavbar}
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                to="/plan"
                className="text-dark-grey-blue font-Fraunces text-2xl font-black capitalize hover:text-dark-cyan transition-colors duration-300"
                onClick={closeNavbar}
              >
                create your plan
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="hidden md:flex justify-between items-center w-full py-11 px-10 lg:px-20">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-grey text-sm font-bold uppercase tracking-[0.9px] hover:text-dark-grey-blue transition-colors duration-300"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-grey text-sm font-bold uppercase tracking-[0.9px] hover:text-dark-grey-blue transition-colors duration-300"
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              to="/plan"
              className="text-grey text-sm font-bold uppercase tracking-[0.9px] hover:text-dark-grey-blue transition-colors duration-300"
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
