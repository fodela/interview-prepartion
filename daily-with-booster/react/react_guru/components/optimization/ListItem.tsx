import React from "react";

const ListItem = React.memo(
  (props: {
    item: {
      id: string;
      name: string;
    };
    onRemove: () => void;
  }) => {
    console.log("Render: ListItem");

    return (
      <li key={props.item.id} onClick={props.onRemove}>
        {props.item.name}
      </li>
    );
  }
);

export default ListItem;
