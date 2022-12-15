import React, { memo } from "react";
import ListItem from "./ListItem";

const List = (props: {
  list: {
    id: string;
    name: string;
  }[];
  onRemove: () => void;
}) => {
  console.log("Render: List");

  return (
    <ul>
      {props.list.map((item) => (
        <ListItem item={item} onRemove={props.onRemove} />
      ))}
    </ul>
  );
};

export default memo(List);
