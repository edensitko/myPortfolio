import { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  required?: boolean;
  label?: string;
}

const Input = ({
  type = "text",
  value = "",
  handleChange = () => {},
  placeholder = "Name",
  name = "fullName",
  className = "w-full p-5 text-sm outline-none h-13 focus:border-theme dark:placeholder:text-white/40",
  required = true,
  label = "",
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        className={className}
        required={required}
        onChange={(e) => handleChange(e)}
      />
      {label && <label>{label}</label>}
    </>
  );
};

export default Input;
