import React from "react";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: 30,
  fontWeight: "800",
  cursor: "pointer",
  outline: "none"
};

export default function Square(props) {
  const { onClick, value } = props;
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}
