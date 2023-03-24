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
      <div className="w-full px-6 py-8 flex justify-between items-center">
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
      ) : null}
    </nav>
  );
};

export default Navbar;
