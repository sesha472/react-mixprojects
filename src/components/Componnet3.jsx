// import React, { useState } from "react";

// const Componnet3 = () => {
//   const [items, setitems] = useState([
//     { id: 1, name: "item1" },
//     { id: 2, name: "item2" },
//     { id: 3, name: "item3" },
//     { id: 4, name: "item4" },
//   ]);

//   const updateHandler = (idarg, namearg) => {
//     const updateditems = items.map((item) =>
//       item.id === idarg ? { ...item, name: namearg } : item
//     );
//     console.log(updateditems);

//     setitems(updateditems);
//   };
//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             {" "}
//             {item.name}
//             <button
//               onClick={() =>
//                 updateHandler(item.id, `${item.id}updated ${item.name}`)
//               }
//               className="bg-slate-500 p-1 rounded-sm m-2"
//             >
//               update
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Componnet3;

//  todo list
import React, { useState } from "react";

const Componnet3 = () => {
  const [todotext, settodotext] = useState("");
  const [todos, settodos] = useState([]);
  const inputHandler = (e) => {
    console.log(e.target.value);
    
    settodotext(e.target.value);
  };


  const addtodoHandler = () => {
    const updatedtodos = [...todos, todotext];
    settodos(updatedtodos);
    console.log(updatedtodos);
    settodotext("");
  };
    
   const handleKeyPress=(e)=>{
    if(e.key=="Enter"){
      addtodoHandler()
    }
   }

   const deleteTodoHandler=(itemindex)=>{
         const updatedtodos= todos.filter((item,index)=>index!== itemindex)
         settodos(updatedtodos)
   }
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
  <div className="w-2/3 md:w-1/2 lg:w-1/3">
    {/* To-Do List */}
    {todos.map((item, index) => (
      <div key={index} className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 my-2">
        <h1 className="text-lg font-semibold text-gray-700">{item}</h1>
        <button
          className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all ease-in-out duration-200"
          onClick={() => deleteTodoHandler(index)} // Ensure you have this handler to delete
        >
          Delete
        </button>
      </div>
    ))}

    {/* Input and Add Button */}
    <div className="flex items-center mt-4">
      <input
        type="text"
        name="todotext"
        placeholder="Add a new task..."
        className="flex-grow bg-gray-200 px-4 py-2 rounded-l-lg outline-none border-2 border-transparent focus:border-blue-400"
        value={todotext}
        onChange={inputHandler}
         onKeyPress={handleKeyPress}
      />
      <button
        onClick={addtodoHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-all ease-in-out duration-200"
      >
        Add Task
      </button>
    </div>
  </div>
</div>

  )
};

export default Componnet3;
