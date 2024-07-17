import React, { useEffect, useState } from "react";

const Test4 = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/todos?limit=5&skip=0");

      const result = await res.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem: any) => ({
          ...todoItem,
          staus: "wip",
        }));
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  function onDragStart(event: any, id: any) {
    event.dataTransfer.setData("id", id);
  }

  function onDrop(event: any, staus: any) {
    const id = event.dataTransfer.getData("id");
    let updateTodos = todos.filter((todoItem: any) => {
      if (todoItem.id.toString() === id) {
        todoItem.staus = staus;
      }
      return todoItem;
    });
    setTodos(updateTodos);
  }

  function renderTodos() {
    const todoListToRender: any = {
      wip: [],
      completed: [],
    };

    todos.forEach((todoItem: any) => {
      todoListToRender[todoItem.staus].push(
        <div
          onDragStart={(event: any) => ondragstart(event, todoItem.id)}
          draggable
          key={todoItem.id}
          className="todo-card"
        >
          {todoItem.todo}
        </div>
      );
    });
    return todoListToRender;
  }

  return (
    <div className="container">
      <h1>Drag and Drop</h1>
      <div className="drag-and-drop-board">
        <div
          className="wip"
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
        >
          <h1>In Progress</h1>
          {renderTodos().wip}
        </div>
        <div className="completed"  onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}>
          <h1>Completed</h1>
          {renderTodos().completed}
        </div>
      </div>
    </div>
  );
};

export default Test4;
