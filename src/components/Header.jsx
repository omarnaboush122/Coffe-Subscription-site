import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header w-[88vw] h-[500px] mx-auto my-3 rounded-md">
      <div className="flex flex-col items-center justify-center text-center w-full h-full text-light-cream px-6">
        <h1 className="text-[40px] leading-10 font-Fraunces font-black">
          Great coffee made simple.
        </h1>
        <p className="mt-6 mb-9 opacity-80">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="/plan">
          <button className="bg-dark-cyan py-4 px-8 text-center rounded-md text-lg font-Fraunces font-black hover:bg-pale-orange transition-colors duration-300">
            Create your plan
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
