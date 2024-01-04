import React from "react";

function ListItem(props) {

  return (
    <li> {props.text} <button type="button"> Update </button><button type="button"> Delete </button></li>
  );
}

export default ListItem;