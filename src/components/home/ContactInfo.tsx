import React from 'react';

interface ContactInfoProps {
  id?: number;
  Icon?: React.ReactNode | React.ComponentType<any>;
  field?: string;
  data?: string;
  link?: string;
  title?: string;
  text?: string;
}

const ContactInfo = ({ Icon, field, data, link, title, text }: ContactInfoProps) => {
  // Handle both data formats (field/data and title/text)
  const displayField = field || title;
  const displayData = data || text;
  
  if (!Icon) return null;

  return (
    <li className="flex flex-wrap items-center gap-5 ">
      <div className="flex justify-center w-12 icon">
        {React.isValidElement(Icon) ? Icon : React.createElement(Icon as React.ComponentType)}
      </div>
      <div className="flex-1">
        <h6 className="text-lg text-black dark:text-white">{displayField}</h6>
        {link ? (
          <a href={link} className="text-sm hover:text-theme transition-colors duration-300">
            {displayData}
          </a>
        ) : (
          <p className="text-sm">{displayData}</p>
        )}
      </div>
    </li>
  );
};

export default ContactInfo;
