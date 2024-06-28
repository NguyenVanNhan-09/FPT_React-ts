import { useEffect, useState } from "react";
import "./App.css";
import RTodo from "./interface/todo";
import instance from "./API";

function App() {
   // interface TProduct {
   //    id: number;
   //    name: string;
   //    image: string;
   //    price: number;
   //    category: string;
   // }

   const [todos, setTodos] = useState<RTodo[]>([]);
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
         // setTodos([
         //    ...todos,
         //    { id: todos.length + 1, title: newTodo, complete: true },
         // ]);

         const data: RTodo = {
            title: newTodo,
            complete: true,
         };
         fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         })
            .then((response) => response.json())
            .then((data: RTodo) => {
               setTodos([...todos, data]);
               alert("Thêm mới thành công");
            });
      }

      setNewTodo("");
   };

   const handleDelete = (id: any) => {
      const isConfirm = confirm("you sure ?");
      if (isConfirm) {
         fetch("http://localhost:3000/todos/" + id, {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
            },
         })
            .then((response) => response.json())
            .then((data: RTodo) => {
               const newtodos = todos.filter((todo) => todo.id !== id);
               setTodos(newtodos);
               alert("Xóa thành công");
            });
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

   useEffect(() => {
      (async () => {
         const { data } = await instance.get("/todos");
         setTodos(data);
      })();
   }, []);

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
                           {item.title}
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
            <input type="text" value={newTodo} onInput={handleInputChange} />
            <button type="submit">Submit</button>
         </form>
      </>
   );
}

export default App;
