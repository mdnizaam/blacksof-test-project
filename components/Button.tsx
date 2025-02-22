import React from "react";
interface IButtonProps {
  label: string;
  border?: boolean;
  bg?: boolean;
  onClick?: () => {};
}

const Button: React.FC<IButtonProps> = ({ label, onClick, border, bg }) => {
  return (
    <button
      type="submit"
      className={`${border ? "border border-white" : ""}  ${
        bg ? "bg-[#5CD6FF]" : ""
      } rounded-[100px] px-[45px] py-[10px] hover:text-black transition-all hover:bg-[#FFFFFF] `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
