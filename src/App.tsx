import { useState } from "react";
import "./App.css";

function App() {
   const [todos, setTodos] = useState([
      { id: 1, title: "Learn Vite" },
      { id: 2, title: "Learn React" },
      { id: 3, title: "Learn Awesome" },
   ]);

   const [newTodo, setNewTodo] = useState("");
   const [editingId, setEditingId] = useState(null);
   const handleInputChange = (e: any) => {
      setNewTodo(e.target.value);
   };

   const handleEdit = (id: any) => {
      const todoEdit = todos.find((todo) => todo.id === id);
      setNewTodo(String(todoEdit?.title));
      setEditingId(id);
   };

   const handleSubmit = (e: any) => {
      e.preventDefault();

      if (editingId) {
         setTodos(
            todos.map((todo) => {
               return todo.id === editingId
                  ? { ...todo, title: newTodo }
                  : todo;
            })
         );
         setEditingId(null);
      } else {
         setTodos([...todos, { id: todos.length + 1, title: newTodo }]);
      }

      setNewTodo("");
   };

   const handleDelete = (id: any) => {
      const isConfirm = confirm("you sure ?");
      if (isConfirm) {
         setTodos(todos.filter((todo) => todo.id !== id));
      }
   };

   return (
      <>
         <ul>
            {todos.map((item) => {
               return (
                  <li key={item.id}>
                     {item.title} {item.id}
                     <button onClick={() => handleEdit(item.id)}>Edit</button>
                     <button onClick={() => handleDelete(item.id)}>
                        Delete
                     </button>
                  </li>
               );
            })}
         </ul>

         <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Add todo</label>
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button type="submit">Submit</button>
         </form>
      </>
   );
}

export default App;
