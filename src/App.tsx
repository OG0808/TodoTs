import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialTodos = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Typescript",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  console.log(todos);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        completed: false,
      },
    ]);
  };
  
  const toggleTodo = (index: number) => {
    setTodos((tareas) =>
      tareas.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id:number) => {
    setTodos((tareas) => tareas.filter((todo) => todo.id!== id));
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo} />
      <div>
        <Todos 
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
