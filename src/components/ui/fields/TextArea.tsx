import { ChangeEvent } from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  className?: string;
  rows?: number;
  label?: string;
  required?: boolean;
}

const Textarea = ({
  placeholder = "Message",
  value = "",
  handleChange = () => {},
  name = "message",
  className = "w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40",
  rows = 5,
  label = "",
  required = true,
}: TextareaProps) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        value={value}
        name={name}
        className={className}
        rows={rows}
        onChange={(e) => handleChange(e)}
        required={required}
      ></textarea>
      {label && <label>{label}</label>}
    </>
  );
};

export default Textarea;
