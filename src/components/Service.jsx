const Service = ({ img, title, desc }) => {
  return (
    <article className="bg-dark-cyan h-96 px-6 flex flex-col justify-center items-center text-center gap-14 rounded-lg">
      <img src={img} alt={title} />
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
