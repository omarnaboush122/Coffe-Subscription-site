import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Logo from "../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full px-6 py-8 flex justify-between items-center">
        <img src={Logo} alt="logo" className="w-40" />
        <img src={Hamburger} alt="hamburger" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
