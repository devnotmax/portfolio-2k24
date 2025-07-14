import React from "react";
import clsx from "clsx";

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => (
  <div
    className={clsx(
      "rounded-xl border border-gray-800 shadow-lg bg-transparent",
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => (
  <div className={clsx("px-6 pt-6 pb-2 bg-transparent", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => (
  <div className={clsx("px-6 pb-6 bg-transparent", className)}>{children}</div>
);

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = "", children }) => (
  <h2 className={clsx("text-xl font-bold", className)}>{children}</h2>
);

export default Card;
