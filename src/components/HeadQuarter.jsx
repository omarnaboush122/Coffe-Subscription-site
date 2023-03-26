const HeadQuarter = ({ img, title, address, city, code, phoneNumber }) => {
  return (
    <article className="flex flex-col justify-center items-center md:items-start">
      <img src={img} alt="united-kingdom" />
      <h3 className="text-dark-grey-blue text-2xl font-Fraunces font-black mt-11 mb-6 md:text-3xl">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="text-dark-grey-blue">{address}</li>
        <li className="text-dark-grey-blue">{city}</li>
        <li className="text-dark-grey-blue">{code}</li>
        <li className="text-dark-grey-blue">{phoneNumber}</li>
      </ul>
    </article>
  );
};

export default HeadQuarter;
