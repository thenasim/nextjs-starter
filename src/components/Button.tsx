import React from "react";
import { joinStrings } from "$/utils/string.utils";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ className, children }: Props) => {
  return (
    <button
      className={joinStrings(
        "px-5 py-2 rounded border border-[gray]",
        className
      )}
    >
      {children}
    </button>
  );
};
