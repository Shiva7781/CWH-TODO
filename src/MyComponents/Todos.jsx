import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3 text-danger">Todos List</h1>
      {props.todos.length === 0 ? (
        <h3 className="text-success">No Todos to display</h3>
      ) : (
        props.todos.map((todo) => {
          // console.log(todo.sno);
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
