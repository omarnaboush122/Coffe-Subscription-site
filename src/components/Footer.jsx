import { Link } from "react-router-dom";
import Logo from "../assets/shared/desktop/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-52 mb-20 mx-6 md:mx-10 md:mb-20 lg:mx-20 lg:mb-32">
      <div className="flex flex-col justify-center items-center text-center py-14 lg:flex-row lg:justify-between lg:py-10 lg:px-20">
        <div>
          <img src={Logo} alt="logo" className="w-60" />
        </div>
        <ul className="flex flex-col gap-6 my-12 md:flex-row md:mb-16 lg:my-0">
          <li>
            <Link
              to="/"
              className="text-grey font-bold tracking-[0.9px] uppercase hover:text-light-cream transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-grey font-bold tracking-[0.9px] uppercase hover:text-light-cream transition-colors duration-300"
            >
              about us
            </Link>
          </li>
          <li>
            <Link
              to="/plan"
              className="text-grey font-bold tracking-[0.9px] uppercase hover:text-light-cream transition-colors duration-300"
            >
              create your plan
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 text-light-cream text-2xl">
          <i class="fa-brands fa-facebook cursor-pointer hover:text-pale-orange transition-colors duration-300"></i>
          <i class="fa-brands fa-twitter cursor-pointer hover:text-pale-orange transition-colors duration-300"></i>
          <i class="fa-brands fa-instagram cursor-pointer hover:text-pale-orange transition-colors duration-300"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
