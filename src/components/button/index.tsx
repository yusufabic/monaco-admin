import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "white" | "danger" | "transparent";
  size?: "small" | "medium" | "large";
  block?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  block = false,
  loading = false,
  icon,
  children,
  className,
  ...props
}) => {
  const classes = classNames(
    "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      "w-full": block,
      "px-4 py-2 text-sm": size === "small",
      "px-5 py-2.5 text-base": size === "medium",
      "px-6 py-3 text-lg": size === "large",
      "bg-primary text-white hover:bg-secondary": variant === "default",
      "bg-white text-primary border border-primary hover:bg-gray-100":
        variant === "white",
      "bg-red-600 text-white hover:bg-red-700": variant === "danger",
      "bg-transparent text-primary hover:bg-gray-100":
        variant === "transparent",
      "opacity-50 cursor-not-allowed": loading,
    },
    className
  );

  return (
    <button className={classes} disabled={loading} {...props}>
      {loading ? <span className="loader"></span> : icon}
      {children}
    </button>
  );
};

export default Button;
