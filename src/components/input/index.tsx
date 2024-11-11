import React from "react";
import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, className, id, ...props }, ref) => {
    const htmlId = id || React.useId();

    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={htmlId}
            className="block text-sm font-medium text-textSecondary mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <input
            id={htmlId}
            ref={ref}
            className={classNames(
              "block w-full px-3 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm",
              {
                "pl-10": icon,
              },
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default Input;
