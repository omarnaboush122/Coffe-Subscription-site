const Service = ({ img, title, desc }) => {
  return (
    <article className="bg-dark-cyan max-w-[400px] mx-auto h-96 px-6 flex flex-col justify-center items-center text-center gap-14 rounded-lg md:flex-row md:text-left md:h-48 md:max-w-[600px] md:px-16 lg:flex-col lg:text-center lg:px-12 lg:h-[380px]">
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
