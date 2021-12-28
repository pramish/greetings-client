import React from "react";
import ButtonCSS from "../../styles/Button/Button.module.scss";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={ButtonCSS.buttons}>
      {label}
    </button>
  );
};
