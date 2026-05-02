import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

const buttonVariants = (variant: ButtonProps["variant"]) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

  const variants: Record<string, string> = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return `${base} ${variants[variant ?? "default"]}`;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${buttonVariants(variant)} ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
