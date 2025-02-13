import React, { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  buttonSize?: "medium" | "large";
  buttonStyle?: "primary" | "outline";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

export const Button = ({
  buttonSize = "medium",
  buttonStyle = "primary",
  children,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
