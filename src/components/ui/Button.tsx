"use client";
import React from 'react';

const defaultClass =
  "inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover";

interface ButtonProps {
  text?: string;
  btnClassName?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const Button = ({
  text = "DOWNLOAD CV",
  btnClassName = defaultClass,
  onClick,
  type = "button",
  suffix = "",
  prefix = "",
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log("Button clicked from component!");
    }
  };
  return (
    <button className={btnClassName} onClick={handleClick} type={type}>
      {prefix && prefix}
      {text}
      {suffix && suffix}
    </button>
  );
};

export default Button;
