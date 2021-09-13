import React from "react";

const ListGroup = ({items, textProp, valueProp, selectedItem, onItemSelect}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProp]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProp]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProp: "_id",
  textProp: "name",
};
export default ListGroup;
