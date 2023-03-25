const Step = ({ number, title, desc }) => {
  return (
    <article className="max-w-[400px] mx-auto flex flex-col justify-center items-center text-center gap-6 md:text-left md:items-start md:justify-start md:gap-2">
      <span className="text-pale-orange text-7xl font-Fraunces font-black">
        {number}
      </span>
      <h3 className="text-3xl text-dark-grey-blue font-Fraunces font-black">
        {title}
      </h3>
      <p className="text-dark-grey-blue">{desc}</p>
    </article>
  );
};

export default Step;
