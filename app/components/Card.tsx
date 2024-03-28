import React from "react";
import { twMerge } from "tailwind-merge";

type ChildrenProps = {
  children: React.ReactNode;
};

type ClassNameProps = {
  className?: string;
};

export const Card: React.FC<ChildrenProps & ClassNameProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "bg-blue-800/15 backdrop-blur-sm rounded-lg overflow-clip",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<ChildrenProps & ClassNameProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "bg-blue-600/25 text-2xl font-bold px-2 py-3 backdrop:blur-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<ChildrenProps & ClassNameProps> = ({
  children,
  className,
}) => {
  return <div className={twMerge("p-4", className)}>{children}</div>;
};
