import React from "react";

const Todo = ({ data }) => {
  return <div>{data?.name ?? <em>{"<empty>"}</em>}</div>;
};

export default Todo;
