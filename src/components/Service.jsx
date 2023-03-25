const Service = ({ img, title, desc }) => {
  return (
    <article className="bg-dark-cyan max-w-[300px] mx-auto h-96 px-6 flex flex-col justify-center items-center text-center gap-14 rounded-lg sm:flex-row sm:text-left sm:h-48 sm:max-w-[600px] sm:px-16">
      <img src={img} alt={title} className="md:w-14" />
      <div>
        <h3 className="text-2xl text-light-cream font-Fraunces font-black mb-6">
          {title}
        </h3>
        <p className="text-light-cream">{desc}</p>
      </div>
    </article>
  );
};

export default Service;
