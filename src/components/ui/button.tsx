import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "default";
  size?: "sm" | "md";
  asChild?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  asChild = false,
  className = "",
  ...props
}) => {
  const Comp = asChild ? ("span" as any) : "button";
  return (
    <Comp
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "default" &&
          "bg-[#c778dd49] text-white hover:bg-[#4ade80] hover:text-black border border-transparent",
        variant === "outline" &&
          "border border-gray-700 bg-transparent text-gray-300 hover:border-[#4ade80] hover:text-[#4ade80]",
        size === "sm" && "text-xs px-3 py-1.5",
        size === "md" && "text-sm px-4 py-2",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
