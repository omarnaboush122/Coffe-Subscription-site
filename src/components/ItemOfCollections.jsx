const Item = ({ title, img, desc }) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <img src={img} alt={title} className="w-[200px]" />
      <h3 className="text-dark-grey-blue font-Fraunces text-2xl font-black mt-6 mb-4">
        {title}
      </h3>
      <p className="text-dark-grey-blue">{desc}</p>
    </article>
  );
};

export default Item;
