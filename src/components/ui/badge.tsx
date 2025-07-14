import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "secondary";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  size = "md",
  className = "",
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded px-2 py-0.5 font-mono text-xs font-semibold border",
        variant === "outline" && "border-gray-700 bg-transparent text-gray-300",
        variant === "secondary" && "border-none bg-gray-700/30 text-gray-200",
        size === "sm" && "text-xs px-2 py-0.5",
        size === "md" && "text-sm px-3 py-1",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge; 