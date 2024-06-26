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
   const [editingTitle, setEditingTitle] = useState("");
   const handleInputChange = (e: any) => {
      setNewTodo(e.target.value);
   };

   const handleEditChange = (e: any) => {
      setEditingTitle(e.target.value);
   };

   const handleEdit = (id: any, title: any) => {
      setEditingId(id);
      setEditingTitle(title);
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

   const handleCanacel = () => {
      setNewTodo("");
      setEditingId(null);
   };
   const hanldSave = (id: any) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, title: editingTitle } : todo
         )
      );
      setEditingId(null);
      setEditingTitle("");
   };

   return (
      <>
         <ul>
            {todos.map((item) => {
               return (
                  <li key={item.id}>
                     {editingId === item.id ? (
                        <>
                           <input
                              type="text"
                              value={editingTitle}
                              onChange={handleEditChange}
                           />
                           <button onClick={() => hanldSave(item.id)}>
                              Save
                           </button>
                           <button onClick={handleCanacel}>Cancel</button>
                        </>
                     ) : (
                        <>
                           {item.title} {item.id}
                           <button
                              onClick={() => handleEdit(item.id, item.title)}
                           >
                              Edit
                           </button>
                           <button onClick={() => handleDelete(item.id)}>
                              Delete
                           </button>
                        </>
                     )}
                  </li>
               );
            })}
         </ul>

         <form action="" onSubmit={handleSubmit}>
            {/* <label htmlFor="">Add todo</label> */}
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button type="submit">Submit</button>
         </form>
      </>
   );
}

export default App;
