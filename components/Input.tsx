import { IinputProps } from "@/types/InputType";
import React from "react";

const Input: React.FC<IinputProps> = ({
  placeholder,
  id,
  type,
  onChange,
  value,
}) => {
  return (
    <input
      className=" text-[20px] w-full p-2 outline-none border-b-2 bg-inherit border-[#FFFFFF66] placeholder:text-[#FFFFFF] focus:border-white"
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
