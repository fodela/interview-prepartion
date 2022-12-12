import React from "react";
import ListItem from "./ListItem";

const List = React.memo(
  (props: {
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
  }
);

export default List;
