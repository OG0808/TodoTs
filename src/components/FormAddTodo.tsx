import  { ChangeEvent, useState } from "react";

interface Props{
    addTodo:(title:string)=>void
}


const FormAddTodo = ({addTodo}:Props) => {
  const [text, setText] = useState("");

  const handleChangue = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };

  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return
      addTodo(trimmedText);
      setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        Todo
        <input
          placeholder="Ingrese todo"
          type="text"
          id="todo"
          value={text}
          onChange={handleChangue}
        />
      </label>
      <button style={{width:'200px'}}>Add todo</button>
    </form>
  );
};

export default FormAddTodo;
