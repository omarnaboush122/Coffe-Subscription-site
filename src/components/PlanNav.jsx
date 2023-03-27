

const PlanNav = () => {
  return (
    <ul className="hidden lg:flex flex-col gap-6 flex-1">
    <li className="w-60 pb-6 opacity-50 border-b border-solid border-grey">
      <span className="text-2xl text-dark-cyan font-Fraunces font-black mr-7 hover:opacity-100 transition-opacity duration-300">
        01
      </span>
      <a
        href="#preferences"
        className="text-grey text-2xl font-Fraunces font-black hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300"
      >
        Preferences
      </a>
    </li>
    <li className="w-60 pb-6 opacity-50 border-b border-solid border-grey">
      <span className="text-2xl text-grey font-Fraunces font-black mr-7 hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300">
        02
      </span>
      <a
        href="#beanType"
        className="text-grey text-2xl font-Fraunces font-black hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300"
      >
        Bean Type
      </a>
    </li>
    <li className="w-60 pb-6 opacity-50 border-b border-solid border-grey">
      <span className="text-2xl text-grey font-Fraunces font-black mr-7 hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300">
        03
      </span>
      <a
        href="#quantity"
        className="text-grey text-2xl font-Fraunces font-black hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300"
      >
        Quantity
      </a>
    </li>
    <li className="w-60 pb-6 opacity-50 border-b border-solid border-grey">
      <span className="text-2xl text-grey font-Fraunces font-black mr-7 hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300">
        04
      </span>
      <a
        href="#grindOption"
        className="text-grey text-2xl font-Fraunces font-black hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300"
      >
        Grind Option
      </a>
    </li>
    <li className="w-60 pb-6 opacity-50 border-b border-solid border-grey">
      <span className="text-2xl text-grey font-Fraunces font-black mr-7 hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300">
        05
      </span>
      <a
        href="#deliveries"
        className="text-grey text-2xl font-Fraunces font-black hover:opacity-100 hover:text-dark-grey-blue transition-all duration-300"
      >
        Deliveries
      </a>
    </li>
  </ul>
  );
}

export default PlanNav;
