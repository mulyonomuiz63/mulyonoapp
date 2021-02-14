import React, { useState } from "react";
import "./TodoList.css";
const TodoList = () => {
  const [todo, setTodo] = useState(["membaca Buku", "Menulis"]);
  const [task, setTaks] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todoIndex, setTodoIndex] = useState(0);
  return (
    <div className="todo">
      <div className="todo_wrapper">
        <div className="todo_header">Todo List</div>
        <br />
        <div className="todo_create">
          <input
            className="form-control mb-2 mr-sm-2"
            value={task}
            onChange={(e) => {
              setTaks(e.target.value);
            }}
            type="text"
          />
          {console.log(task.length)}
          {isEdit > 0 ? (
            <button
              className="btn btn-success mb-2 ml-2"
              onClick={() => {
                setIsEdit(false);
                setTaks("");
                setTodo((prev) => {
                  const newData = [...prev];
                  newData.splice(todoIndex, 1, task);
                  return newData;
                });
              }}
            >
              Update
            </button>
          ) : task.length > 0 ? (
            <button
              className="btn btn-primary mb-2 ml-2"
              onClick={() => {
                setTodo((prev) => {
                  const newData = [...prev];
                  newData.push(task);
                  return newData;
                });
              }}
            >
              Create
            </button>
          ) : (
            <button
              disabled
              className="btn btn-primary mb-2 ml-2"
              onClick={() => {
                setTodo((prev) => {
                  const newData = [...prev];
                  newData.push(task);
                  return newData;
                });
              }}
            >
              Create
            </button>
          )}
        </div>
        <br />
        <br />

        {todo.map((v, i) => {
          return (
            <div className="form-inline">
              <div>
                <input
                  type="text"
                  className="form-control mb-2 ml-1"
                  value={v}
                />
              </div>
              <button
                className="btn btn-warning mb-2 ml-1"
                onClick={() => {
                  setIsEdit(true);
                  setTaks(v);
                  setTodoIndex(i);
                }}
              >
                edit
              </button>

              <button
                className="btn btn-danger mb-2 ml-1"
                onClick={() => {
                  setIsEdit(false);
                  setTodo((prev) => {
                    const newData = [...prev];
                    newData.splice(i, 1);
                    return newData;
                  });
                }}
              >
                delet
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;