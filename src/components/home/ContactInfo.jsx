const ContactInfo = ({ Icon, field, data, link }) => {
  return (
    <li className="flex flex-wrap items-center gap-5 ">
      <div className="flex justify-center w-12 icon">{Icon}</div>
      <div className="flex-1">
        <h6 className="text-lg text-black dark:text-white">{field}</h6>
        {link ? (
          <a href={link} className="text-sm hover:text-theme transition-colors duration-300">
            {data}
          </a>
        ) : (
          <p className="text-sm">{data}</p>
        )}
      </div>
    </li>
  );
};

export default ContactInfo;
