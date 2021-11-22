import React from "react";

interface Props<T> {
  data: T[];
  keyExtractor: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
}

export const ListMap = <T extends unknown>({
  data,
  keyExtractor,
  renderItem,
}: Props<T>) => {
  return (
    <React.Fragment>
      {data.map((item) => (
        <React.Fragment key={keyExtractor(item)}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
