const Item = ({ title, img, desc }) => {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between md:gap-9">
      <img src={img} alt={title} className="w-[250px]" />
      <div>
      <h3 className="text-dark-grey-blue font-Fraunces text-2xl font-black mt-6 mb-4 md:mb-6">
        {title}
      </h3>
      <p className="text-dark-grey-blue">{desc}</p>
      </div>
    </article>
  );
};

export default Item;
