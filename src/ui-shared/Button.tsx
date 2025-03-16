import React from "react";

 
interface ButtonProps {
  onClick: () => void;
  txt: string;
  icon?: React.ReactNode;
  style?: string;
  type?: "button" | "submit" | "reset";
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  txt,
  icon,
  style,
  type = "button",
  endIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className={style ? style : "btn_test_data"}
      type={type}
    >
      {icon}
      {txt}
      {endIcon}
    </button>
  );
};

export default Button;
