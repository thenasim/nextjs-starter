import React from "react";
import { joinStrings } from "$/utils/string.utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  align?: "strecth" | "center" | "flex-start" | "flex-end";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const Stack = ({
  align = "strecth",
  justify = "flex-start",
  spacing = "md",
  className,
  children,
}: Props) => {
  const alignClasses: {
    [k in typeof align]: string;
  } = {
    strecth: "items-stretch",
    center: "items-center",
    "flex-start": "items-start",
    "flex-end": "items-end",
  };
  const justifyClasses: {
    [k in typeof justify]: string;
  } = {
    center: "justify-center",
    "flex-start": "justify-start",
    "flex-end": "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
  };
  const spacingClasses: {
    [k in typeof spacing]: string;
  } = {
    xs: "gap-xs",
    sm: "gap-sm",
    md: "gap-md",
    lg: "gap-xl",
    xl: "gap-xl",
  };

  return (
    <div
      className={joinStrings(
        "flex flex-col",
        alignClasses[align],
        justifyClasses[justify],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </div>
  );
};
