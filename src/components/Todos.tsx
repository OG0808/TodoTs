import { Todo } from "../App";

interface Props {
  toggleTodo: (index: number) => void;
  removeTodo: (id: number) => void;
  todos: Todo[];
}

const Todos = ({ toggleTodo, removeTodo, todos }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <article key={todo.title}>
          <label
            style={{ fontSize: "30px", fontWeight: "bold" }}
            htmlFor="todo"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              id="todo"
              onChange={() => {
                toggleTodo(index);
              }}
            />
            {todo.title}
          </label>
          <button
            onClick={() => {
              removeTodo(todo.id);
            }}
            style={{ width: "200px", marginTop: "40px", fontWeight: "bold" }}
            className="contrast"
          >
            Remove Todo
          </button>
        </article>
      ))}
    </>
  );
};

export default Todos;
